// scripts/generate-routes.js
const fs = require('fs');
const path = require('path');

const FEATURE_DIR  = path.resolve(__dirname, '../src/app/features/api-docs/api-doc-page');
const ROUTES_OUT   = path.join(FEATURE_DIR, 'api-docs-routing.module.ts');
const SIDEBAR_OUT  = path.join(
  FEATURE_DIR,
  '../components/sidebar/sidebar.component.html'
);

function humanLabel(kebab) {
  return kebab
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// 1) Recorrer recursivo
function walk(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      return walk(full);
    }
    if (
      name.endsWith('.component.ts') &&
      !name.endsWith('.spec.ts') &&
      !name.endsWith('-routing.module.ts')
    ) {
      return [full];
    }
    return [];
  });
}

// 2) Extraer selector y className
const COMPONENT_RE = /@Component\(\{\s*selector\s*:\s*['"`](.+?)['"`][\s\S]*?export\s+class\s+(\w+)/m;
const files = walk(FEATURE_DIR);

const entries = files.map(file => {
  const txt = fs.readFileSync(file, 'utf8');
  const m   = txt.match(COMPONENT_RE);
  if (!m) return null;
  const [, selector, className] = m;
  const routePath = selector.replace(/^app-/, '');
  const relImport = './' +
    path.relative(FEATURE_DIR, file).replace(/\\/g, '/').replace(/\.ts$/, '');
  return { selector, className, routePath, importPath: relImport, filePath: file };
}).filter(Boolean);

// 3) Construir árbol para sidebar (por carpetas)
const tree = {};
for (const e of entries) {
  // carpeta relativa sin incluir el filename
  const folder = path.dirname(path.relative(FEATURE_DIR, e.filePath)).replace(/\\/g, '/');
  const parts = folder === '' ? [] : folder.split('/');
  let node = tree;
  for (const part of parts) {
    node[part] = node[part] || { __children: {} };
    node = node[part].__children;
  }
  // guarda la entrada en ese nivel
  node[e.routePath] = { __entry: e };
}

// 4) Generar api-docs-routing.module.ts
const imports = entries
  .map(e => `import { ${e.className} } from '${e.importPath}';`)
  .join('\n');

const routes = entries
  .map(e => `  { path: '${e.routePath}', component: ${e.className} }`)
  .join(',\n');

const routingModule = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

${imports}

const routes: Routes = [
${routes}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ApiDocsRoutingModule {}
`;

fs.writeFileSync(ROUTES_OUT, routingModule, 'utf8');
console.log(`✅  Rutas generadas en ${ROUTES_OUT}`);

// 5) Generar sidebar.component.html
function renderSidebar(node, parentPath = '') {
  return Object.entries(node).flatMap(([key, val]) => {
    if (val.__entry) {
      // enlace hoja
      const label = humanLabel(key);
      return `    <a mat-list-item routerLink="/${key}" routerLinkActive="active">${label}</a>`;
    } else {
      // grupo con children
      const label = humanLabel(key);
      const children = renderSidebar(val.__children, parentPath + '/' + key);
      return [
        `<mat-expansion-panel>`,
        `  <mat-expansion-panel-header>`,
        `    <mat-panel-title>${label}</mat-panel-title>`,
        `  </mat-expansion-panel-header>`,
        `  <mat-nav-list>`,
        ...children,
        `  </mat-nav-list>`,
        `</mat-expansion-panel>`
      ];
    }
  });
}

const sidebarLines = [
  `<mat-nav-list>`,
  ...renderSidebar(tree),
  `</mat-nav-list>`
];

fs.writeFileSync(SIDEBAR_OUT, sidebarLines.join('\n'), 'utf8');
console.log(`✅  Sidebar actualizado en ${SIDEBAR_OUT}`);
