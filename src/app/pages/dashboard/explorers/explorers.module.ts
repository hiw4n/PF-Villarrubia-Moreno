import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorersRoutingModule } from './explorers-routing.module';
import { ExplorersComponent } from './explorers.component';


@NgModule({
  declarations: [
    ExplorersComponent
  ],
  imports: [
    CommonModule,
    ExplorersRoutingModule
  ]
})
export class ExplorersModule { }
