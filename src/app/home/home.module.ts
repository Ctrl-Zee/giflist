import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GifListPageModule } from './ui/gif-list/gif-list.module';
import { SearchBarPageModule } from './ui/search-bar/search-bar.module';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GifListPageModule,
    SearchBarPageModule,
    SettingsPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
