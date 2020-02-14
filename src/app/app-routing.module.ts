import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', children: [
    {
      path: '',
      loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
      path: ':todoId',
      component: ToDoItemComponent
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
