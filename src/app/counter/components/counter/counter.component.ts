import { Component, } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy()">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `
})
export class CounterComponent{
  public counter:number = 10;

  public increaseBy(value:number = 1):void{
    this.counter +=value;
  }
  public decreaseBy(value:number = 1):void{
    this.counter -=value;
  }
  public resetValue():void{
    this.counter =10;
  }
}
