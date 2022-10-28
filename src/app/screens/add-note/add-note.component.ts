import { Component, OnInit } from '@angular/core';
import { Editor, schema } from 'ngx-editor';
import { toHTML } from 'ngx-editor';
import { toDoc } from 'ngx-editor';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent implements OnInit {

  // editor!: Editor;
  // html!: '' ;

  constructor() { }

  ngOnInit(): void {
    // this.editor = new Editor();
  }

  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }

  // list: any = [];

  // jsonDoc = toDoc(this.html);
  // htmlData = toHTML(this.jsonDoc, schema); // schema is optional

  li: any = [];

  saveDraft() {
    //this.list.push(this.html);

    this.li.push()


  }
}
