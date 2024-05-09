import { Routes } from '@angular/router';
import { HomePage } from './home/home.page'; // Import the HomePage component

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage, // Specify the component directly
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
