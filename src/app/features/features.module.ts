import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { ExplorersModule } from '../pages/dashboard/explorers/explorers.module';

import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule, ExplorersModule],
})
export class FeaturesModule {}
