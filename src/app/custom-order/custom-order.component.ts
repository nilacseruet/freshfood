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
  constructor(private menuItemService:MenuItemService) { }

  ngOnInit() {
    const menuList$ = this.menuItemService.getMenuList();
    menuList$.subscribe(data =>this.menuList = data);

  }

  getSelectedMenuValue(selectedValu){
   
    let selectedMenuById = this.menuList.filter(data=>data.id==selectedValu.target.value);
    this.selectedMenu = selectedMenuById[0];
    
  
  }

}



