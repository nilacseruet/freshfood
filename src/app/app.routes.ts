import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FreshServicesComponent } from './fresh-services/fresh-services.component';
import { CustomOrderComponent } from './custom-order/custom-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Remember to import the Home Component
  },
  { path: 'services', component: FreshServicesComponent },
  { path: 'custom-order', component: CustomOrderComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'checkout', component: CheckoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);