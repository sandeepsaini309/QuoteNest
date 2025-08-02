import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SavedQuotesComponent } from './components/saved-quotes/saved-quotes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'saved', component: SavedQuotesComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
