import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-reducer';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';



const routes:Routes=[
  {
    path:'',
    component:CounterComponent

}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: counterReducer }),
    RouterModule.forChild(routes),
    AsyncPipe
  ]
})
export class CounterModule { }
