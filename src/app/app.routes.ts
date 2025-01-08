import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ViewChildExampleComponent } from './pages/view-child-example/view-child-example.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { LinkedsignalComponent } from './pages/linkedsignal/linkedsignal.component';
import { Component } from '@angular/core';
import { SampleTempFormComponent } from './pages/sample-temp-form/sample-temp-form.component';
import { ControlStateChangeEventsComponent } from './pages/control-state-change-events/control-state-change-events.component';


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
        path:"linkedsignal",
        component:LinkedsignalComponent
    },
    {
        path:"tempformexmple",
        component: SampleTempFormComponent
    },
    {
        path: "ControlStateChangeEvents",
        component:ControlStateChangeEventsComponent
    },
    {
        path:"viewchild",
        component:ViewChildExampleComponent
    }

];
