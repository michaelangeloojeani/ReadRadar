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
  {
    path: 'category',
    loadComponent: () => import('./category/category.page').then( m => m.CategoryPage)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us.page').then( m => m.AboutUsPage)
  },
  {
    path: 'fantasy',
    loadComponent: () => import('./fantasy/fantasy.page').then( m => m.FantasyPage)
  },
  {
    path: 'action',
    loadComponent: () => import('./action/action.page').then( m => m.ActionPage)
  },
  {
    path: 'science',
    loadComponent: () => import('./science/science.page').then( m => m.SciencePage)
  },
  {
    path: 'romance',
    loadComponent: () => import('./romance/romance.page').then( m => m.RomancePage)
  },
];
