import { Component, OnInit } from '@angular/core';

declare const require: any;
@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styles: []
})
export class MarkdownComponent implements OnInit {

  doc_html = require('!!html-loader!./markdown.component.html');

  doc_ts = require('!!raw-loader!./markdown.component.ts');

  constructor() { }

  ngOnInit() {
  }

  /**
   * 复用框切换执行的事件
   */
  _onReuseInit() {
    console.log('_onReuseInit');
  }

}
