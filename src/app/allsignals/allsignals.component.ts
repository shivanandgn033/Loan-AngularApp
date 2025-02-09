import { Component, WritableSignal, effect, linkedSignal, signal  } from '@angular/core';
import { Writable } from 'stream';

@Component({
  selector: 'app-allsignals',
  imports: [],
  templateUrl: './allsignals.component.html',
  styleUrl: './allsignals.component.css'
})
export class AllsignalsComponent {

  //writable signals
  value=100;
 counter= signal(0);
 counetr2:WritableSignal<number> = signal(0);

 total=linkedSignal({
  source:this.counter,
  computation:()=>this.counter()+this.value+this.counetr2()
 });
 constructor(){
  this.counter.set(5);
  this.counetr2.set(10);
  effect(()=>console.log("check the value changed"+ this.counter))

}
 getSignals(){
 this.counter.update(i=>i+1);
 this.counetr2.update(i=>i+1);
 }

}
