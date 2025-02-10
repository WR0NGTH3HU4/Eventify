import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NeweventComponent } from './components/newevent/newevent.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

export const routes: Routes = [

    {
        path: 'newevent', component: NeweventComponent
    }
    
];
