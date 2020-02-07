import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', children: [
    {
      path: '',
      loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
      path: ':todoId',
      loadChildren: './pages/home/home.module#HomePageModule'
    }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
