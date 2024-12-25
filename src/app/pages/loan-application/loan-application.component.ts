import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan, ApiResponseModel } from '../../model/application.model';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-loan-application',
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application:Application=new Application();
  loan:Loan=new Loan(); 
  masterSev=inject(MasterService)
  addLoan()
  {
    const strObj=JSON.stringify(this.loan);
    const newObj=JSON.parse(strObj)
    this.application.Loans.unshift(newObj);
    this.loan=new Loan();
  }
  onSubmit()
  {
    this.masterSev.addNewApplication(this.application).subscribe((Result:ApiResponseModel)=>
    {
      if(Result.result){
        alert("loan application saved success");
      }else{
        alert(Result.message);
      }

    }
    )
  }

}
