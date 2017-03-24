import { Component, OnInit, Input } from '@angular/core';
import {Menu, Ingredient} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';


@Component({
  selector: 'app-custom-order',
  templateUrl: './custom-order.component.html',
  styleUrls: ['./custom-order.component.scss']
})
export class CustomOrderComponent implements OnInit {
 
  selectedMenu:Menu;
  menuList:Menu[];
  item_no:number;
  isNotExistItemOnCart:number;

  constructor(private menuItemService:MenuItemService) 
  {
      this.item_no =0;
   }

  ngOnInit() {
    const menuList$ = this.menuItemService.getMenuList();
    menuList$.subscribe(data =>this.menuList = data);
    this.item_no = this.menuItemService.getAddToCartItemNo();
  }

  

  getSelectedMenuValue(selectedValu){
    let selectedMenuById = this.menuList.filter(data=>data.id==selectedValu.target.value);
    this.selectedMenu = selectedMenuById[0];
     //console.log("menu chanfge");
    this.item_no = this.menuItemService.getAddToCartItemNo();
    this.isNotExistItemOnCart = this.menuItemService.isNotExistItemOnCart(this.selectedMenu.name);
    if(this.item_no>0 && this.isNotExistItemOnCart){
        document.getElementById("menu-details").hidden = false;
       // document.getElementById("menu-details").offsetParent);
    }
     
    
  }
 
}



