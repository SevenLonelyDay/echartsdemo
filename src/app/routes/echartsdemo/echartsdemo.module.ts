import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartsdemoRoutingModule } from './echartsdemo-routing.module';
import { EchartsdemoComponent } from './echartsdemo/echartsdemo.component';
import { EchartslinkComponent } from './echartslink/echartslink.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EchartsdemoRoutingModule
  ],
  declarations: [EchartsdemoComponent, EchartslinkComponent]
})
export class EchartsdemoModule { }
