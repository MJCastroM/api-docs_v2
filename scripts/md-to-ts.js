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

// Quita acentos/diacríticos (se usa solo para generar nombres “seguros”)
function stripAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Escapa apóstrofes en literales
function esc(str) {
  return String(str).replace(/'/g, "\\'");
}

function extractBlock(content, start, end) {
  const i = content.indexOf(start);
  const j = content.indexOf(end, i + start.length);
  return i >= 0 && j > i
    ? content.slice(i + start.length, j).trim()
    : '';
}

function parseTable(md) {
  const lines = md.split('\n').map(l => l.trim()).filter(l => l);
  if (lines.length < 2) return [];
  const headers = lines[0].split('|').map(h => h.trim());
  return lines.slice(2).map(line => {
    const cols = line.split('|').map(c => c.trim());
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = cols[idx] || '';
    });
    return obj;
  });
}

function extractBackendConfig(content) {
  var block = extractBlock(content,
    '<!-- ABRE CONFIGURACIÓN BACKEND -->',
    '<!-- CIERRA CONFIGURACIÓN BACKEND -->'
  );
  if (!block){
    block = extractBlock(content,
    '<!-- ABRE LA CONFIGURACIÓN BACKEND -->',
    '<!-- CIERRA LA CONFIGURACIÓN BACKEND -->'
    );
  }
  if (!block) return { hasConfig: false, text: '', config: [] };

  const infoTag = '::: info Configuración Backend';
  let text = block;
  const idx = block.indexOf(infoTag);
  if (idx >= 0) {
    text = block.slice(idx + infoTag.length).trim();
  }

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(l => /^\d+\)/.test(l));
  const config = lines.map(line => {
    const parts = line.replace(/^\d+\)\s*/, '').split(/:\s*/);
    if (parts.length > 1) {
      return {
        campo: parts[0].trim(),
        valor: parts.slice(1).join(':').trim()
      };
    }
    return { campo: line, valor: '' };
  });

  return { hasConfig: true, text };
}

function extractSdts(content) {
  // 1) Saco todo el bloque de SDTs
  let block = extractBlock(content,
    '<!-- ABRE SDT -->',
    '<!-- CIERRA SDT -->'
  );
  if (!block) {
    block = extractBlock(content,
      '<!-- ABRE EL SDT -->',
      '<!-- CIERRA EL SDT -->'
    );
  }
  if (!block) return [];

  // 2) Encuentro todos los encabezados de tipo
  const headerRe = /###\s*([A-Za-z0-9_]+)/g;
  const entries = Array.from(block.matchAll(headerRe));

  const sdts = [];
  for (let i = 0; i < entries.length; i++) {
    const typeName = entries[i][1];
    const startIdx = entries[i].index + entries[i][0].length;
    // cálcula dónde arranca la siguiente sección
    const endIdx = (i + 1 < entries.length)
      ? entries[i + 1].index
      : block.length;
    // tomo TODO lo que va de este encabezado al siguiente
    const section = block.slice(startIdx, endIdx);

    // busco la tabla Markdown
    const tableHeaderRe = /Nombre\s*\|\s*Tipo\s*\|\s*Comentarios/;
    const tableStart = section.search(tableHeaderRe);
    if (tableStart < 0) continue;

    // extraigo desde allí hasta el final de la sección
    const tableMd = section.slice(tableStart);
    const fields = parseTable(tableMd);
    sdts.push({ typeName, fields });
  }

  return sdts;
}


function extractApiTabs(content) {
  var block = extractBlock(content,
    '<!-- ABRE TABLA DE DATOS -->',
    '<!-- CIERRA TABLA DE DATOS -->'
  );
  if (!block){
    block = extractBlock(content,
    '<!-- ABRE LA TABLA DE DATOS -->',
    '<!-- CIERRA LA TABLA DE DATOS -->'
    );
  }
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
  var inv = extractBlock(content,
    '<!-- ABRE EJEMPLO DE INVOCACIÓN -->',
    '<!-- CIERRA EJEMPLO DE INVOCACIÓN -->'
  );
  if (!inv){
    inv = extractBlock(content,
    '<!-- ABRE EL EJEMPLO DE INVOCACIÓN -->',
    '<!-- CIERRA EL EJEMPLO DE INVOCACIÓN -->'
    );
  }
  var resp = extractBlock(content,
    '<!-- ABRE EJEMPLO DE RESPUESTA -->',
    '<!-- CIERRA EJEMPLO DE RESPUESTA -->'
  );
  if (!resp){
    resp = extractBlock(content,
    '<!-- ABRE EL EJEMPLO DE RESPUESTA -->',
    '<!-- CIERRA EL EJEMPLO DE RESPUESTA -->'
    );
  }
  const code = (blk, lang) => {
    const re = new RegExp('```' + lang + '[\\s\\S]*?```', 'm');
    const mm = blk.match(re);
    return mm
      ? mm[0].replace(/```(?:xml|json)/g, '').replace(/```/g, '').trim()
      : '';
  };
  return {
    invocation: { xml: code(inv, 'xml'), json: code(inv, 'json') },
    response:   { xml: code(resp,'xml'),  json: code(resp,'json') }
  };
}

function renderComponent(mdPath) {
  const txt  = fs.readFileSync(mdPath, 'utf8');
  const { data, content } = matter(txt);

  const rawName  = path.basename(mdPath, '.md');                    // conserva acentos
  const safeName = stripAccents(rawName).replace(/\W/g, '');        // solo para nombre de clase/selector/archivo

  const cls      = `${safeName.charAt(0).toUpperCase() + safeName.slice(1)}Component`;
  const selector = `app-${safeName}`;

  // calcular rutas relativas
  const relDir = path.relative(MD_DIR, path.dirname(mdPath));
  const depth  = relDir ? relDir.split(path.sep).length : 0;
  const baseUps = '../../../';
  const extraUps = '../'.repeat(depth);
  const routeAnimationsPath = `${baseUps}${extraUps}route-animations`;

  // metadatos
  const key  = data.title || rawName;
  var meta = extractBlock(content,
    '<!-- ABRE DATOS DEL MÉTODO -->',
    '<!-- CIERRA DATOS DEL MÉTODO -->'
  );
  if (!meta){
    meta = extractBlock(content,
    '<!-- ABRE LOS DATOS DEL MÉTODO -->',
    '<!-- CIERRA LOS DATOS DEL MÉTODO -->'
    );
  }

  const pub     = meta.match(/\*\*Nombre publicación:\*\*\s*(.+)/)?.[1] || '';
  const prog    = meta.match(/\*\*Programa:\*\*\s*(.+)/)?.[1] || '';
  const sc      = meta.match(/\*\*Global\/País:\*\*\s*(.+)/)?.[1] || '';
  
  const desc = meta.replace(/::: note/, '').split('\n')[0].trim();

  // tablas y ejemplos
  const { inTbl, outTbl, errTbl } = extractApiTabs(content);
  const examples = extractExamples(content);
  const sdts     = extractSdts(content);

  // literales para filas
  const toRows = tbl => `[${tbl.map(r =>
    `{ Nombre: '${esc(r.Nombre)}', Tipo: '${esc(r.Tipo)}', Comentarios: '${esc(r.Comentarios)}' }`
  ).join(', ')}]`;
  const toRowsErr = tbl => `[${tbl.map(r =>
    `{ Codigo: '${esc(r.Codigo||r.Código)}', Descripcion: '${esc(r.Descripción||r.Descripcion)}' }`
  ).join(', ')}]`;
  const sdtLit = `[${sdts.map(s =>
    `{ typeName: '${esc(s.typeName)}', fields: ${toRows(s.fields)} }`
  ).join(', ')}]`;

  const inputData  = toRows(inTbl);
  const outputData = toRows(outTbl);
  const errors     = toRowsErr(errTbl);
  const { hasConfig, text: backendText } = extractBackendConfig(content);
  const ms = Date.now();

  return `import { Component } from '@angular/core';
import { fadeInOut } from '${routeAnimationsPath}';

@Component({
  selector: '${selector}',
  templateUrl: '${extraUps}DocTemplate.component.html',
  styleUrls: ['${extraUps}DocTemplate.component.scss'],
  animations: [ fadeInOut ],
  host: { '[@fadeInOut]': '' }
})
export class ${cls}${ms} {
  pageTitle        = '${esc(key)}';
  description      = \`${esc(desc)}\`;
  pubName    = '${esc(pub)}';
  programa   = '${esc(prog)}';
  scope      = '${esc(sc)}';

  hasBackendConfig = ${hasConfig};
  backendText      = \`${esc(backendText)}\`;
  backendConfig    = [];

  inputData  = ${inputData};
  outputData = ${outputData};
  errors     = ${errors};

  examples = {
    invocation: { xml: \`
${esc(examples.invocation.xml)}\`, 
    json: \`
${esc(examples.invocation.json)}\` },
    response:   { xml: \`
${esc(examples.response.xml)}\`,  
    json: \`
${esc(examples.response.json)}\` }
  };

  structuredTypes = ${sdtLit};
}
`;
}

ensureDir(OUT_DIR);
walkMd(MD_DIR).forEach(mdPath => {
  const rel     = path.relative(MD_DIR, path.dirname(mdPath));
  const dir     = path.join(OUT_DIR, rel);
  ensureDir(dir);

  const rawName  = path.basename(mdPath, '.md');
  const safeName = stripAccents(rawName).replace(/\W/g, '');
  const file     = `${safeName}.component.ts`;
  const outPath  = path.join(dir, file);

  fs.writeFileSync(outPath, renderComponent(mdPath), 'utf8');
  console.log('Generated:', outPath);
});
