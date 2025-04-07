import { Routes } from '@angular/router';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';

export const routes: Routes = [
    {
        path:"",
        component : AComponent,
    },
    {
        path:"a",
        component : AComponent,
    },
    {
        path:"b",
        component : BComponent,
    }
   

];
