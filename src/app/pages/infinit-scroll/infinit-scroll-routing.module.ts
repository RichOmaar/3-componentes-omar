import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitScrollPage } from './infinit-scroll.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitScrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitScrollPageRoutingModule {}
