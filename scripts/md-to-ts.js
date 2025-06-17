// scripts/generate-components-from-md.js
const fs     = require('fs');
const path   = require('path');
const matter = require('gray-matter');

// Configurable paths
const MD_DIR  = path.resolve(__dirname, './archivos_markdown');
const OUT_DIR = path.resolve(__dirname, './generated_ts');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function walkMd(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) return walkMd(full);
    return name.endsWith('.md') ? [full] : [];
  });
}

function stripAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function extractBlock(content, start, end) {
  const i = content.indexOf(start);
  const j = content.indexOf(end, i + start.length);
  return i >= 0 && j > i ? content.slice(i + start.length, j).trim() : '';
}

function parseTable(md) {
  const lines = md.split('\n').map(l => l.trim()).filter(l => l);
  if (lines.length < 2) return [];
  const headers = lines[0].split('|').map(h => stripAccents(h.trim()));
  return lines.slice(2).map(line => {
    const cols = line.split('|').map(c => c.trim());
    const obj = {};
    headers.forEach((h, idx) => obj[h] = stripAccents(cols[idx] || ''));
    return obj;
  });
}
// Extrae configuración backend si existe
function extractBackendConfig(content) {
  const block = extractBlock(content,
    '<!-- ABRE CONFIGURACIÓN BACKEND -->',
    '<!-- CIERRA CONFIGURACIÓN BACKEND -->'
  );
  if (!block) return { hasConfig: false, text: '', config: [] };
  const infoTag = '::: info Configuración Backend';
  let text = block;
  const idx = block.indexOf(infoTag);
  if (idx >= 0) {
    text = block.slice(idx + infoTag.length).trim();
  }
  // Extraer líneas numeradas
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => /^\d+\)/.test(l));
  const config = lines.map(line => {
    const parts = line.replace(/^\d+\)\s*/, '').split(/:\s*/);
    if (parts.length > 1) {
      return { campo: stripAccents(parts[0].trim()), valor: stripAccents(parts.slice(1).join(':').trim()) };
    }
    return { campo: stripAccents(line), valor: '' };
  });
  return { hasConfig: true, text: stripAccents(text) };
}


function extractSdts(content) {
  const block = extractBlock(content,
    '<!-- ABRE SDT -->',
    '<!-- CIERRA SDT -->'
  );
  const sdts = [];
  const headerRe = /###\s*([A-Za-z0-9_]+)/g;
  const entries = Array.from(block.matchAll(headerRe));
  for (let i = 0; i < entries.length; i++) {
    const typeName = stripAccents(entries[i][1]);
    // Search from end of this header
    const startIdx = entries[i].index + entries[i][0].length;
    // Find center block for this SDT
    const centerMarker = '::: center';
    const centerPos = block.indexOf(centerMarker, startIdx);
    if (centerPos < 0) continue;
    const afterCenter = block.slice(centerPos + centerMarker.length);
    const endCenter = afterCenter.indexOf(':::');
    const centerContent = endCenter >= 0 ? afterCenter.slice(0, endCenter) : afterCenter;
    // Locate table
    const tableStart = centerContent.search(/Nombre\s*\|\s*Tipo\s*\|\s*Comentarios/);
    if (tableStart < 0) continue;
    const tableMd = centerContent.slice(tableStart);
    const fields = parseTable(tableMd);
    sdts.push({ typeName, fields });
  }
  return sdts;
}

function extractApiTabs(content) {
  const block = extractBlock(content,
    '<!-- ABRE TABLA DE DATOS -->',
    '<!-- CIERRA TABLA DE DATOS -->'
  );
  const sections = {};
  const tabRe = /@tab\s*([^\n]+)\n([\s\S]*?)(?=(?:@tab|:::|$))/g;
  let m;
  while ((m = tabRe.exec(block))) {
    sections[m[1].trim()] = m[2].trim();
  }
  const inTbl  = parseTable(sections['Datos de Entrada']  || '');
  const outTbl = parseTable(sections['Datos de Salida']   || '');
  const errMd  = sections['Errores'] || '';
  const errTbl = errMd.includes('No aplica') ? [] : parseTable(errMd);
  return { inTbl, outTbl, errTbl };
}

function extractExamples(content) {
  const inv = extractBlock(content,
    '<!-- ABRE EJEMPLO DE INVOCACIÓN -->',
    '<!-- CIERRA EJEMPLO DE INVOCACIÓN -->'
  );
  const resp = extractBlock(content,
    '<!-- ABRE EJEMPLO DE RESPUESTA -->',
    '<!-- CIERRA EJEMPLO DE RESPUESTA -->'
  );
  const code = (blk, lang) => {
    const re = new RegExp('```' + lang + '[\\s\\S]*?```', 'm');
    const mm = blk.match(re);
    return mm ? mm[0].replace(/```(?:xml|json)/g, '').replace(/```/g, '').trim() : '';
  };
  return {
    invocation: { xml: code(inv, 'xml'), json: code(inv, 'json') },
    response:   { xml: code(resp,'xml'),  json: code(resp,'json') }
  };
}

function renderComponent(mdPath) {
  const txt     = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(txt);
  const name    = path.basename(mdPath, '.md');
  const key     = stripAccents(data.title || name);
  const cls     = stripAccents(key.replace(/\W/g, '')) + 'Component';

  const meta    = extractBlock(content,
    '<!-- ABRE DATOS DEL MÉTODO -->',
    '<!-- CIERRA DATOS DEL MÉTODO -->'
  );
  const pub     = meta.match(/\*\*Nombre publicación:\*\*\s*(.+)/)?.[1] || '';
  const prog    = meta.match(/\*\*Programa:\*\*\s*(.+)/)?.[1] || '';
  const sc      = meta.match(/\*\*Global\/País:\*\*\s*(.+)/)?.[1] || '';
  const desc    = stripAccents(meta.replace(/::: note/, '').split('\n')[0].trim());

  const { inTbl, outTbl, errTbl } = extractApiTabs(content);
  const examples = extractExamples(content);
  const sdts     = extractSdts(content);

  const toCols = tbl => `[${tbl.map(r => `\'${r.Nombre}\'`).join(', ')}]`;
  const toRows = tbl => `[${tbl.map(r => `{ Nombre: \'${r.Nombre}\', Tipo: \'${r.Tipo}\', Comentarios: \'${r.Comentarios}\' }`).join(', ')}]`;
  const toRowsErr = tbl => `[${tbl.map(r => `{ Codigo: \'${r.Codigo}\', Descripcion: \'${r.Descripcion}\' }`).join(', ')}]`;

  const inputData  = toRows(inTbl);
  const outputData = toRows(outTbl);
  const errors     = toRowsErr(errTbl.map(r => ({ Codigo: r.Codigo || r.Código, Descripcion: r.Descripcion || r.Descripción })));
  const sdtLit     = `[${sdts.map(s => `{ typeName: \'${s.typeName}\', fields: ${toRows(s.fields)} }`).join(', ')}]`;
  const { hasConfig, text: backendText } = extractBackendConfig(content);

  return `import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-${name.replace(/\W/g, '')}',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ${cls} {
  pageTitle = '${key}';
  description = \`${desc}\`;
  pubName    = '${pub}';
  programa   = '${prog}';
  scope      = '${sc}';

  

  hasBackendConfig  = ${hasConfig};
  backendText       = \`${backendText.replace(/`/g, '\\`')}\`;
  backendConfig     = [];

  inputData  = ${inputData};
  outputData = ${outputData};
  errors     = ${errors};

  examples = {
    invocation: { xml: \`${examples.invocation.xml}\`, json: \`${examples.invocation.json}\` },
    response:   { xml: \`${examples.response.xml}\`,  json: \`${examples.response.json}\` }
  };

  structuredTypes = ${sdtLit};
}
`;
}

ensureDir(OUT_DIR);
walkMd(MD_DIR).forEach(mdPath => {
  const rel   = path.relative(MD_DIR, path.dirname(mdPath));
  const dir   = path.join(OUT_DIR, rel);
  ensureDir(dir);
  const file  = path.basename(mdPath, '.md') + '.component.ts';
  const out   = path.join(dir, file);
  fs.writeFileSync(out, renderComponent(mdPath), 'utf8');
  console.log('Generated:', out);
});
