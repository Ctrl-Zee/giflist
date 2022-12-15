import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifListPage } from './gif-list.page';

const routes: Routes = [
  {
    path: '',
    component: GifListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifListPageRoutingModule {}
