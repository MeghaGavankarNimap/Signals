import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sig',
  standalone: true,
  imports: [],
  templateUrl: './sig.component.html',
  styleUrl: './sig.component.scss'
})
export class SigComponent {
   counter=signal(0);

   increment(){
    
    this.counter.update((val)=>val+1)
    // console.log(this.counter)

   }

   decrement(){
    this.counter.update((val)=>val-1)
    // console.log(this.counter)
  //this.counter.set(this.counter()+1) 
  // this.counter.mutate()
   }

}
