import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ViewChildExampleComponent } from './pages/view-child-example/view-child-example.component';
import { SignalsComponent } from './pages/signals/signals.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:"newApplication",
        pathMatch:"full"
    },
    {
        path:"newApplication",
        component:LoanApplicationComponent
    },
    {
        path:"applicationList",
        component:ApplicationListComponent
    },
    {
        path:"reusabletablecomponent",
        component:ParentComponent
    },
    {
        path:"signaldemo",
        component:SignalsComponent
    },
    {
        path:"viewchild",
        component:ViewChildExampleComponent
    }

];
