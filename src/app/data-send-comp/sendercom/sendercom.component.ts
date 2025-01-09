import { Component } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sendercom',
  imports: [],
  templateUrl: './sendercom.component.html',
  styleUrl: './sendercom.component.css'
})
export class SendercomComponent {

  constructor( private _service: DataSharingService, private _route: Router  ){}
  messageSender="message from sender";
  snedMessage()
  {
    this._service.changeMessage(this.messageSender);
    this._route.navigate(['/reciver']);
  }
}
