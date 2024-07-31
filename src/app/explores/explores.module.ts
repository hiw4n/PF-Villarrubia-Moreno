import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploresRoutingModule } from './explores-routing.module';
import { ExplorerPageComponent } from './page/explorer-page/explorer-page.component';
import { LayoutPageComponent } from './page/layout-page/layout-page.component';
import { ListPageComponent } from './page/list-page/list-page.component';
import { NewPageComponent } from './page/new-page/new-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';

@NgModule({
  declarations: [
    ExplorerPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
  ],
  imports: [CommonModule, ExploresRoutingModule],
})
export class ExploresModule {}
