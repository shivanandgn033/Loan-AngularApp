import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sample-temp-form',
  imports: [FormsModule],
  templateUrl: './sample-temp-form.component.html',
  styleUrl: './sample-temp-form.component.css'
})
export class SampleTempFormComponent {

  user={name:'', email:'', country:''}
  isSubmitted=false;

  onSubmit(form:NgForm)
  {
   if(form.valid){
     console.log(this.user);
     this.isSubmitted=true;
   }

  }

  resetForm(form:NgForm)
  {
    this.user={
      name:'',
      email:'',
      country:''
    }

    this.isSubmitted=false;
    form.resetForm(); // reset form's state 

  }

}
