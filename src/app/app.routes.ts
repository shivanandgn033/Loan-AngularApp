import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './pages/loan-application/loan-application.component';
import { ApplicationListComponent } from './pages/application-list/application-list.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ViewChildExampleComponent } from './pages/view-child-example/view-child-example.component';
import { SignalsComponent } from './pages/signals/signals.component';
import { LinkedsignalComponent } from './pages/linkedsignal/linkedsignal.component';
import { SampleTempFormComponent } from './pages/sample-temp-form/sample-temp-form.component';
import { ControlStateChangeEventsComponent } from './pages/control-state-change-events/control-state-change-events.component';
import { ReceivercomComponent } from './data-send-comp/receivercom/receivercom.component';
import { SendercomComponent } from './data-send-comp/sendercom/sendercom.component';
import { ParenttestComponent } from './inputoutputproperty/parenttest/parenttest.component';
import { UserformComponent } from './reactiveforms/userform/userform.component';
import { UserComponent } from './resouseusage/user/user.component';
import { AllsignalsComponent } from './allsignals/allsignals.component';



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
        path:"allsignals",
        component:AllsignalsComponent
    },
    {
        path:"tempformexmple",
        component: SampleTempFormComponent
    },
    {
        path:"reactiveforms",
        component:UserformComponent
    },
    {
        path: "ControlStateChangeEvents",
        component:ControlStateChangeEventsComponent
    },
    {
        path:"sender",
        component:SendercomComponent
    },
    {
        path: "reciver",
        component:ReceivercomComponent
    },
    {
       path:"inputoutputtest",
       component:ParenttestComponent
    },
    {
        path:'resorceUsage',
        component:UserComponent
    },
    
    {
        path:"viewchild",
        component:ViewChildExampleComponent
    }

];
