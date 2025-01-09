import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-receivercom',
  imports: [],
  templateUrl: './receivercom.component.html',
  styleUrl: './receivercom.component.css'
})
export class ReceivercomComponent implements OnInit {
  message:any

  constructor(private _service: DataSharingService){}
  ngOnInit()
  {
    this._service.currentMessage.subscribe((mes:any)=>{
    this.message=mes
    }
    )
  }



}
