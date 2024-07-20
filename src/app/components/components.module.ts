import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarScrollComponent } from './navbar-scroll/navbar-scroll.component';

@NgModule({
  declarations: [NavbarScrollComponent],
  exports: [NavbarScrollComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
