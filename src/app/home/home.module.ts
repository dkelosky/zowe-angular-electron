import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IndeterminateLoadingComponent } from './indeterminate-loading/indeterminate-loading.component';

@NgModule({
  declarations: [HomeComponent, ToolbarComponent, IndeterminateLoadingComponent],
  imports: [CommonModule,
    SharedModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule {}
