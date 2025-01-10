import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtest',
  imports: [],
  templateUrl: './childtest.component.html',
  styleUrl: './childtest.component.css'
})
export class ChildtestComponent {
  @Input() testmessage:string='';
  @Output() meesageEmiter=new EventEmitter<string>();

  sendtopatent()
  {
    this.meesageEmiter.emit("message from child component through event emiter");
  }

}
