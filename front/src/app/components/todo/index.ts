/**
 * index.js
 * Created by Huxley on 12/9/15.
 */
import {Component} from '@angular/core';
import {UEditorComponent} from '../ueditor';
@Component({
  selector: 'todo',
  template: `
  <h1>TODO</h1>
  `,
  // <ueditor [(ueModel)]="text"></ueditor>
  // <div [innerHTML]="text"></div>
  // `,
  styles: [`h1 { text-align: center; color: #f08f13; }`],
  directives:[UEditorComponent]
})
export class Todo {
	public text:string='init data';
}
