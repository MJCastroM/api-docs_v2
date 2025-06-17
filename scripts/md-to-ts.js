// scripts/generate-components-from-md.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Configurable input/output paths
const MD_DIR = path.resolve(__dirname, './archivos_markdown');
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
    const m = blk.match(re); return m ? m[0].replace(/```(?:xml|json)/g,'').replace(/```/g,'').trim() : '';
  };
  return { invocation: { xml: code(inv,'xml'), json: code(inv,'json') }, response: { xml: code(resp,'xml'), json: code(resp,'json') } };
}

function extractSdts(content) {
  const block = extractBlock(content,
    '<!-- ABRE SDT -->',
    '<!-- CIERRA SDT -->'
  );
  // extraer tabla Markdown que sigue a "Nombre | Tipo | Comentarios"
  const tblRe = /Nombre\s*\|\s*Tipo\s*\|\s*Comentarios[\s\S]*?(\n[\s\S]*)/m;
  const m = block.match(tblRe);
  return m ? parseTable(block.slice(block.indexOf(m[0]))) : [];
}

function renderComponent(mdPath) {
  const txt = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(txt);
  const name = path.basename(mdPath, '.md');
  const key = stripAccents(data.title || name);
  const cls = stripAccents(key.replace(/\W/g,'')) + 'Component';
  const meta = extractBlock(content,'<!-- ABRE DATOS DEL MÉTODO -->','<!-- CIERRA DATOS DEL MÉTODO -->');
  const pub  = meta.match(/\*\*Nombre publicación:\*\*\s*(.+)/)?.[1]||'';
  const prog = meta.match(/\*\*Programa:\*\*\s*(.+)/)?.[1]||'';
  const sc   = meta.match(/\*\*Global\/País:\*\*\s*(.+)/)?.[1]||'';
  const desc = stripAccents(meta.replace(/::: note/, '').split('\n')[0].trim());
  const { inTbl, outTbl, errTbl } = extractApiTabs(content);
  const ex = extractExamples(content);
  const sdt = extractSdts(content);
  // flatten arrays inline
  const inputCols  = `[${inTbl.map(r=>`'${r.Nombre}'`).join(', ')}]`;
  const inputData  = `[${inTbl.map(r=>`{ Nombre: '${r.Nombre}', Tipo: '${r.Tipo}', Comentarios: '${r.Comentarios}' }`).join(', ')}]`;
  const outputCols = `[${outTbl.map(r=>`'${r.Nombre}'`).join(', ')}]`;
  const outputData = `[${outTbl.map(r=>`{ Nombre: '${r.Nombre}', Tipo: '${r.Tipo}', Comentarios: '${r.Comentarios}' }`).join(', ')}]`;
  const errorCols  = `[${errTbl.map(r=>`'${r.Codigo || r.Código}'`).join(', ')}]`;
  const errors     = `[${errTbl.map(r=>`{ Codigo: '${r.Codigo||r.Código}', Descripcion: '${stripAccents(r.Descripcion||r.Descripción)}' }`).join(', ')}]`;
  const structured = `[${sdt.map(r=>`{ Nombre: '${r.Nombre}', Tipo: '${r.Tipo}', Comentarios: '${r.Comentarios}' }`).join(', ')}]`;
  return `import { Component } from '@angular/core';
import { fadeInOut } from '../../../../route-animations';

@Component({
  selector: 'app-${name.replace(/\W/g,'')}',
  templateUrl: './DocTemplate.component.html',
  styleUrls: ['./DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ${cls} {
  // Cabecera e info-card
  pageTitle = '${key}';
  description = \`${desc}\`;
  pubName    = '${pub}';
  programa   = '${prog}';
  scope      = '${sc}';

  // Backend config
  hasBackendConfig = false;
  backendText      = '';
  backendConfig    = [];

  // Pestañas de Input/Output/Errors
  inputCols  = ${inputCols};
  inputData  = ${inputData};
  outputCols = ${outputCols};
  outputData = ${outputData};
  errorCols  = ${errorCols};
  errors     = ${errors};

  // Ejemplos de invocacion / respuesta
  examples = { invocation: { xml: \`${ex.invocation.xml}\`, json: \`${ex.invocation.json}\` }, response: { xml: \`${ex.response.xml}\`, json: \`${ex.response.json}\` } };

  // Datos estructurados
  structuredTypes = ${structured};
}
`;
}

// generate
ensureDir(OUT_DIR);
walkMd(MD_DIR).forEach(md => {
  const rel = path.relative(MD_DIR, path.dirname(md));
  const d = path.join(OUT_DIR, rel); ensureDir(d);
  const f = path.basename(md, '.md');
  const out = path.join(d, f + '.component.ts');
  fs.writeFileSync(out, renderComponent(md), 'utf8');
  console.log('Generated:', out);
});
