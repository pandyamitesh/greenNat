import { Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MiteshComponent } from "app/mitesh/mitesh.component";

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'countries', component: CountriesComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'mitesh', component: MiteshComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent }
];