import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NeweventComponent } from './components/newevent/newevent.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { StatsComponent } from './components/stats/stats.component';

export const routes: Routes = [
    {
        path: '', component: LandingpageComponent
    },
    
    {
        path: 'newevent', component: NeweventComponent
    },

    {
        path: 'landingpage', component: LandingpageComponent
    },

    {
        path: 'stats', component: StatsComponent
    },
    
    {
        path: '**', redirectTo: '' 
    },
];
