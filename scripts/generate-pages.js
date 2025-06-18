// scripts/generate-routes.js
var fs = require('fs');
var path = require('path');

var FEATURE_DIR  = path.resolve(__dirname, '../src/app/features/api-docs/api-doc-page');
var ROUTES_OUT   = path.join(FEATURE_DIR, 'api-docs-routing.module.ts');
var SIDEBAR_OUT  = path.join(
  FEATURE_DIR,
  '../components/sidebar/sidebar.component.html'
);

// 1) humanLabel: ahora también separa camelCase
function humanLabel(str) {
  return str
    // transforma kebab-case a espacios
    .replace(/-/g, ' ')
    // inserta espacio antes de mayúsculas (camelCase → camel Case)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// 2) Recorrer recursivo (sin cambios)
function walk(dir) {
  return fs.readdirSync(dir).flatMap(name => {
    var full = path.join(dir, name);
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

// 3) Regex componente (sin cambios)
var COMPONENT_RE = /@Component\(\{\s*selector\s*:\s*['"`](.+?)['"`][\s\S]*?export\s+class\s+(\w+)/m;
var files = walk(FEATURE_DIR);

var entries = files.map(file => {
  var txt = fs.readFileSync(file, 'utf8');
  var m   = txt.match(COMPONENT_RE);
  if (!m) return null;
  var selector  = m[1];
  var className = m[2];

  // → NUEVO: calcular carpeta relativa
  var folder = path.dirname(path.relative(FEATURE_DIR, file)).replace(/\\/g, '/'); 
  // selector sin 'app-'
  var baseRoute = selector.replace(/^app-/, '');
  // → NUEVO: ruta completa incluyendo carpetas
  var routePath = (folder ? folder + '/' : '') + baseRoute;

  var relImport = './' +
    path.relative(FEATURE_DIR, file).replace(/\\/g, '/').replace(/\.ts$/, '');
  return { selector, className, routePath, importPath: relImport, filePath: file };
}).filter(Boolean);

// 4) Generar api-docs-routing.module.ts
var imports = entries
  .map(e => `import { ${e.className} } from '${e.importPath}';`)
  .join('\n');

var routes = entries
  .map(e => `  { path: '${e.routePath}', component: ${e.className} }`)
  .join(',\n');

var routingModule = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

${imports}

var routes: Routes = [
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
      var label = humanLabel(key);
      // → NUEVO: link usando la ruta completa
      var link  = '/' + (parentPath ? parentPath + '/' : '') + key;
      return `    <a mat-list-item routerLink="${link}" routerLinkActive="active">${label}</a>`;
    } else {
      // grupo con children
      var label = humanLabel(key);
      var children = renderSidebar(val.__children, parentPath + (parentPath?'/':'') + key);
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

var tree = {};
for (var e of entries) {
  var folder = path.dirname(path.relative(FEATURE_DIR, e.filePath)).replace(/\\/g, '/');
  var parts = folder === '' ? [] : folder.split('/');
  let node = tree;
  for (var part of parts) {
    node[part] = node[part] || { __children: {} };
    node = node[part].__children;
  }
  // → NUEVO: guardo la entry bajo su baseRoute (sin 'app-')
  var baseRoute = e.routePath.split('/').pop();
  node[baseRoute] = { __entry: e };
}

var sidebarLines = [
  `<mat-nav-list>`,
  ...renderSidebar(tree),
  `</mat-nav-list>`
];

fs.writeFileSync(SIDEBAR_OUT, sidebarLines.join('\n'), 'utf8');
console.log(`✅  Sidebar actualizado en ${SIDEBAR_OUT}`);
