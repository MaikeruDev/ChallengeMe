import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodiumPageRoutingModule } from './podium-routing.module';

import { PodiumPage } from './podium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodiumPageRoutingModule
  ],
  declarations: [PodiumPage]
})
export class PodiumPageModule {}
