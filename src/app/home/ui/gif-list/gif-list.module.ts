import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GifListPageRoutingModule } from './gif-list-routing.module';

import { GifListPage } from './gif-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, GifListPageRoutingModule],
  declarations: [GifListPage],
  exports: [GifListPage],
})
export class GifListPageModule {}
