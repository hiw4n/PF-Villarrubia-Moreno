import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error-404-page/error-404-page.component';

@NgModule({
  declarations: [Error404PageComponent],
  exports: [Error404PageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
