import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartsdemoComponent } from './echartsdemo/echartsdemo.component';
import { EchartslinkComponent } from './echartslink/echartslink.component';

const routes: Routes = [
  { path: '', component: EchartsdemoComponent, data: { title: '堆叠区域图', titleI18n: '堆叠区域图' } },
  { path: 'link', component: EchartslinkComponent, data: { title: '柱形和折线图', titleI18n: '柱形和折线图' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsdemoRoutingModule { }
