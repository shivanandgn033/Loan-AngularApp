import { Component, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-linkedsignal',
  imports: [],
  templateUrl: './linkedsignal.component.html',
  styleUrl: './linkedsignal.component.css'
})
export class LinkedsignalComponent {

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
