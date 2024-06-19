import { AsyncPipe } from '@angular/common';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import('../../../myproj/src/app/sig/sig.module').then(m=>m.SigModule)
    },
    {
        path:'lang',
        loadChildren:()=>import('../../../myproj/src/app/lang/lang.module').then(m=>m.LangModule)
    },
    {
        path:'count',
        loadChildren:()=>import('../../../myproj/src/app/counter/counter.module').then(m=>m.CounterModule)
    }
];
