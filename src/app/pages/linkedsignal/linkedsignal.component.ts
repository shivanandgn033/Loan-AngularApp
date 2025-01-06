import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-linkedsignal',
  imports: [],
  templateUrl: './linkedsignal.component.html',
  styleUrl: './linkedsignal.component.css'
})
export class LinkedsignalComponent {

//Key Concepts:
//Signals: Represent reactive values that can change over time.
//Computed Signals: Derived signals that are calculated based on other signals.
//Reactivity: Changes to one signal automatically trigger updates in dependent signals.

//What is linkedSignal?

//linkedSignal is a utility provided by the Signals library in Angular.
//It allows you to create a signal that is automatically updated when another signal changes.
//This is particularly useful for creating derived signals or for synchronizing data between different parts of your application.

  quantitySignal=signal(0);
  price=10;
  
  //total=computed(()=>{return this.quantitySignal()* this.price;})
  //total=linkedSignal(()=>{return this.quantitySignal()* this.price;})
  total = linkedSignal({
    source:this.quantitySignal,
    computation:()=>this.quantitySignal()*this.price
   // equal:(a:any,b:any)=>a==b
  })

calculate()
{
  this.quantitySignal.set(10);
}



}
