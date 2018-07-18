import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartsdemoRoutingModule } from './echartsdemo-routing.module';
import { EchartsdemoComponent } from './echartsdemo/echartsdemo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EchartsdemoRoutingModule
  ],
  declarations: [EchartsdemoComponent]
})
export class EchartsdemoModule { }
