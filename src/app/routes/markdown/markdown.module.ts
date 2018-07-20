import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownRoutingModule } from './markdown-routing.module';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownedutorComponent } from './markdownedutor/markdownedutor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarkdownRoutingModule
  ],
  declarations: [MarkdownComponent, MarkdownedutorComponent]
})
export class MarkdownModule { }
