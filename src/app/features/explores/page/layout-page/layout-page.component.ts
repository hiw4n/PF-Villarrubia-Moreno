import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Exploradores', icon: 'rocket_launch', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-explorer' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];
}
