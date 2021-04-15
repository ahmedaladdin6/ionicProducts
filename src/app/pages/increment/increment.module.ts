import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncrementPageRoutingModule } from './increment-routing.module';

import { IncrementPage } from './increment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncrementPageRoutingModule
  ],
  declarations: [IncrementPage]
})
export class IncrementPageModule {}
