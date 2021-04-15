import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncrementPage } from './increment.page';

const routes: Routes = [
  {
    path: '',
    component: IncrementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncrementPageRoutingModule {}
