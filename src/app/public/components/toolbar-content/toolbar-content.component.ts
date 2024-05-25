import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toolbar-content',
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent {
  title = 'sweet-manager';

  @Input() options : any = [];

  constructor(){
  }

}
