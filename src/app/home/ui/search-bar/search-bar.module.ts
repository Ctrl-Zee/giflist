import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBarPageRoutingModule } from './search-bar-routing.module';

import { SearchBarPage } from './search-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchBarPageRoutingModule,
  ],
  declarations: [SearchBarPage],
  exports: [SearchBarPage],
})
export class SearchBarPageModule {}
