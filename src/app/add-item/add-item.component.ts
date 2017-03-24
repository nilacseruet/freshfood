import { Component, OnInit,Input, OnChanges, SimpleChanges,ViewChild } from '@angular/core';
import {Menu,Ingredient,IngredientType,menuIngPrice} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';
import {ModalWindow} from './modal-window';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  
  finalList:menuIngPrice[];
  quantityNotNumber:boolean;
  @Input() menuIngPriceList:menuIngPrice;
  @ViewChild(ModalWindow)
  public readonly modal: ModalWindow;
  

  constructor(private menuItemService:MenuItemService) { 
    console.log('iniatiate');
    this.quantityNotNumber = true; 
  }

  ngOnInit() {
    this.finalList = [];
  }


  onSubmit(quantityForm){

    //console.log("ss"+this.menuIngPriceList.price);
    if(isNaN(quantityForm.quantity) || quantityForm.quantity==0){
      this.quantityNotNumber = false;
    }else{
      this.quantityNotNumber = true;
    }
    if(this.quantityNotNumber){
      this.menuIngPriceList.price = this.menuIngPriceList.price*this.menuIngPriceList.quantity;
     //console.log("menuIngPriceList::"+this.menuIngPriceList.price);
      let test:menuIngPrice;
      test = this.menuIngPriceList;
      this.finalList = this.menuItemService.addSelectedItemOnFinalList(test);
      //console.log("menuIngPriceListafter::"+this.menuIngPriceList.price);
    
      this.modal.show(this.finalList);
      
    }
  }

}
