import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorersModule } from './explorers/explorers.module';
import { PlanetsModule } from './planets/planets.module';

const routes: Routes = [
  {
    path: 'exploradores',
    loadChildren: () =>
      import('./explorers/explorers.module').then((r) => ExplorersModule),
  },
  {
    path: 'planetas',
    loadChildren: () =>
      import('./planets/planets.module').then((r) => PlanetsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
