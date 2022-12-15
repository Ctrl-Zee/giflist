import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'gif-list',
    loadChildren: () => import('./ui/gif-list/gif-list.module').then( m => m.GifListPageModule)
  },
  {
    path: 'search-bar',
    loadChildren: () => import('./ui/search-bar/search-bar.module').then( m => m.SearchBarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
