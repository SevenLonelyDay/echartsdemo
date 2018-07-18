import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartsdemoComponent } from './echartsdemo/echartsdemo.component';

const routes: Routes = [
  { path: '', component: EchartsdemoComponent, data: { title: '折线图', titleI18n: '折线图' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartsdemoRoutingModule { }
