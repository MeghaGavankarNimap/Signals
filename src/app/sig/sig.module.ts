import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { SigComponent } from './sig.component';

const routes:Routes=[
  {
    path:'signal',
    component:SigComponent
  },
  {
    path:'',
    component:SigComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SigModule { }
