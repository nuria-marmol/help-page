import { Routes } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';

export const routes: Routes = [
    { path: 'help', component: HelpPageComponent },
    { path: '', redirectTo: 'help', pathMatch: 'full' },
    { path: '**', redirectTo: 'help' }
];
