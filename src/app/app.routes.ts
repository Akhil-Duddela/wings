import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DailySpecialsComponent } from './pages/daily-specials/daily-specials.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Wings | Home' },
  { path: 'menu', component: MenuComponent, title: 'Wings | Menu' },
  { path: 'daily-specials', component: DailySpecialsComponent, title: 'Wings | Daily Specials' },
  { path: 'contact', component: ContactComponent, title: 'Wings | Contact' },
  { path: '**', redirectTo: 'home' }
];
