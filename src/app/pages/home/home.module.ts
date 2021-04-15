import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ArabicNumberPipe } from '../../core/providers/numberToArabic.pipe';
import { IncrementPage } from '../increment/increment.page';
import { HeaderPage } from 'src/app/shared/header/header.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,ArabicNumberPipe,IncrementPage,HeaderPage]
})
export class HomePageModule {}
