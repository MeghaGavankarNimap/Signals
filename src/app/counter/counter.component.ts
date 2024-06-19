import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter-acton';

import { CommonModule } from '@angular/common'; // Import CommonModule

import { map } from 'rxjs/operators';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
count$:Observable<number> | undefined
constructor(private store:Store<{count:number}>){
  this.count$=store.select('count')

}



  incre(){
    this.store.dispatch(increment());
  }
 
  

  decre(){
    this.store.dispatch(decrement());
  }

  

  res(){
    this.store.dispatch(reset());
  }

}
