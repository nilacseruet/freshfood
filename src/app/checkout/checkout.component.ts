import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shipping } from './shipping';
import {GlobalValidator} from '../common/globalValidator';
import {MenuItemService} from '../menu-item/menu-item.service';
import {menuIngPrice} from '../menu-item/menu';
import { routing } from '../app.routes';
import { Routes, RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  shipping: FormGroup;
  item_no:number;
  finalList:menuIngPrice[];

  constructor(private router: Router,private fb: FormBuilder, private menuItemService:MenuItemService) {
    this.finalList = [];
  }
  ngOnInit() {
    
    this.item_no = this.menuItemService.getAddToCartItemNo();
    this.finalList = this.menuItemService.getFinalList();

    this.shipping = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, GlobalValidator.incorrectMailFormat]],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: [''],
      zip: ['', Validators.required],
      country: ['', Validators.required]
      
    });
  }

  removeItem(item:string){
    console.log("here"+item);
    this.finalList = this.menuItemService.removeItemFromFinalList(item);
    this.item_no   = this.finalList.length;
  }

  onSubmit({ value, valid }: { value: Shipping, valid: boolean }) {
      if(valid){
        this.menuItemService.emptyList();
        this.router.navigate(['/']);
      }
  }


}
