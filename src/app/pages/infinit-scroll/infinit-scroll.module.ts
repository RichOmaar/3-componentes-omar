import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitScrollPageRoutingModule } from './infinit-scroll-routing.module';

import { InfinitScrollPage } from './infinit-scroll.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitScrollPage]
})
export class InfinitScrollPageModule {}
