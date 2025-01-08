import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-state-change-events',
  imports: [ReactiveFormsModule],
  templateUrl: './control-state-change-events.component.html',
  styleUrl: './control-state-change-events.component.css'
})

// Control State Change Events

// In Angular 18, the Forms API provides a set of events that allow you to react to changes in the state of form controls. These events include:

// valueChanges: Emits an event every time the value of the control changes.
// statusChanges: Emits an event every time the validation status of the control changes (e.g., from VALID to INVALID, or vice versa).
// errorsChanges: Emits an event every time the set of validation errors on the control changes.
// These events can be used to:

// Update UI elements dynamically: For example, display error messages based on the validation status.
// Trigger side effects: Perform actions like saving data to the server or updating other parts of the application.
// Implement custom validation logic: React to changes in the input values and perform real-time validation.
export class ControlStateChangeEventsComponent {
  myControl=new FormControl(Validators.required,Validators.email);
 constructor()
 {
   this.myControl.valueChanges.subscribe(
     (value:any)=>{
       console.log('value changes:' +value)
     }
   );

   this.myControl.statusChanges.subscribe(
     (state:any)=>{
       console.log('control state change is' +state)
     }
   )

    // Subscribe to errorsChanges event
    // this.myControl.errorsChanges.subscribe(errors => {
    //   console.log('Errors changed:', errors);
    // });

}

}