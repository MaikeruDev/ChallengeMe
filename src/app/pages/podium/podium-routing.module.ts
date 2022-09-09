import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PodiumPage } from './podium.page';

const routes: Routes = [
  {
    path: '',
    component: PodiumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PodiumPageRoutingModule {}
