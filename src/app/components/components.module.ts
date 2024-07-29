import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, MatIconModule],
})
export class ComponentsModule {}
