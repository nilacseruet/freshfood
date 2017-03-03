import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import {Menu,Ingredient,IngredientType,menuIngPrice} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';

@Component({
  selector: 'add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  @Input() menuIngPriceList:menuIngPrice;

  constructor() { }

  ngOnInit() {
    console.log("ngonit"+this.menuIngPriceList);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['menuIngPriceList']) {
      console.log("changes"+this.menuIngPriceList.menu + "::"+this.menuIngPriceList.ingredient+"::"+this.menuIngPriceList.price);
    }
  }

}
