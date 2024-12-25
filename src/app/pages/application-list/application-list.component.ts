import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Application, ApiResponseModel } from '../../model/application.model';

@Component({
  selector: 'app-application-list',
  imports: [],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent {
  constructor(private masterSr:MasterService){}

  userApploanlist:Application[]=[];
  ngOnInit() { 
    this.masterSr.getuserApplicationdetails().subscribe((Result:ApiResponseModel)=>
    {
      if(Result.result){
        this.userApploanlist= Result.data;
      }else{
        alert(Result.message);
      }

    }
    )
}


}
