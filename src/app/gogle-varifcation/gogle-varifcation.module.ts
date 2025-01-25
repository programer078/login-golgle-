import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GogleVarifcationPageRoutingModule } from './gogle-varifcation-routing.module';

import { GogleVarifcationPage } from './gogle-varifcation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GogleVarifcationPageRoutingModule
  ],
  declarations: [GogleVarifcationPage]
})
export class GogleVarifcationPageModule {}
