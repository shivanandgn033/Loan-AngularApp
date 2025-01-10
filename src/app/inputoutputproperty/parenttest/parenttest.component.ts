import { Component } from '@angular/core';
import { ChildtestComponent } from '../childtest/childtest.component';

@Component({
  selector: 'app-parenttest',
  imports: [ChildtestComponent],
  templateUrl: './parenttest.component.html',
  styleUrl: './parenttest.component.css'
})
export class ParenttestComponent {
 sendmessage:string="send messsage to child component";
 messagefromprent:string='';
 recevemessage(message:string)
 {
   this.messagefromprent=message;
 }
}
