import { MarkdownedutorComponent } from './markdownedutor/markdownedutor.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'md', pathMatch: 'full' },
  { path: 'md', component: MarkdownComponent, data: { title: 'markdown解析', titleI18n: 'markdown解析' } },
  { path: 'ueditor', component: MarkdownedutorComponent, data: { title: 'markdown编辑器', titleI18n: 'markdown编辑器' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkdownRoutingModule { }
