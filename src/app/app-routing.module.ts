import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // Este renderiza navbar + sidebar + outlet
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/api-docs/api-docs.module').then((m) => m.ApiDocsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
