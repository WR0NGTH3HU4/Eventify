import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NeweventComponent } from './components/newevent/newevent.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { StatsComponent } from './components/stats/stats.component';
import { LoginComponent } from './components/login/login.component';
import { UserAuthGuard } from './guards/user-auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { OwnenvetsComponent } from './components/ownenvets/ownenvets.component';

export const routes: Routes = [

    /**
   *  logged out routes
   */
    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'landingpage', component: LandingpageComponent
    },

    {
        path: 'profile',
        children:[
            {
                path: '', component: ProfileComponent,
            },
            {
                path:'ownevents', component: OwnenvetsComponent
            }
        ]
    },
    //{path:'ownevents', component: OwnenvetsComponent},
    {
        path: '', component: LandingpageComponent
    },
    
    /**
   * logged in routes
   */
    {
        path: 'newevent', component: NeweventComponent, canActivate: [UserAuthGuard]
    },

    {
        path: 'stats', component: StatsComponent, canActivate: [UserAuthGuard]
    },

    /**
   * Other routes
   */
    
    {
        path: '**', redirectTo: '' 
    },
];
