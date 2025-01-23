import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home.component').then((m) => m.HomeComponent);
    },
  },

  {
    path: 'login',
    loadComponent: () => {
      return import('./login/login.component').then(
        (module) => module.LoginComponent
      );
    },
  },

  {
    path: 'add-product',
    loadComponent: () => {
      return import('./add-product/add-product.component').then(
        (module) => module.AddProductComponent
      );
    },
  },
];
