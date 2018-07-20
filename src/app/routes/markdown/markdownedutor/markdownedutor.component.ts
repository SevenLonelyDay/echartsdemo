import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdownedutor',
  templateUrl: './markdownedutor.component.html',
  styles: []
})
export class MarkdownedutorComponent implements OnInit {

  md_html = "### 测试文档  `npm i`"

  constructor() { }

  ngOnInit() {
  }

}
