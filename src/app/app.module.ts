import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreshServicesComponent } from './fresh-services/fresh-services.component';
import { CustomOrderComponent } from './custom-order/custom-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MenuItemService } from './menu-item/menu-item.service';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

import { routing } from './app.routes';
import { IngredientDetailsComponent } from './ingredient-details/ingredient-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import {ModalWindow} from './add-item/modal-window';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FreshServicesComponent,
    CustomOrderComponent,
    ContactUsComponent,
    MenuDetailsComponent,
    IngredientDetailsComponent,
    AddItemComponent,
    ModalWindow,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MenuItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
