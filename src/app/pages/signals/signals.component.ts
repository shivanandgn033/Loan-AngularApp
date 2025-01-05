import { Component,signal, WritableSignal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // without change detection mechanizam: nsignal will emit the change value like rxjs observable.
  // to remove zoneless detection introduced signals.
  //signal can define two ways like below and have set and update propert to change the value.
  // signals also have effect fucntion to know the changes in signal variable.
  // signal can use any primitive data type like arrays object .. so on.

  //counter= signal(0);
  counter:WritableSignal<number>=signal(0);

 constructor(){
   this.counter.set(5);
   effect(()=>console.log("check the value changed"+ this.counter))

 }
 Onincrement(){
   this.counter.update(i=>i+1);
 }

}
