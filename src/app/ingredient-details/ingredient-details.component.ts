import { Component, OnInit,Input } from '@angular/core';
import {Menu,Ingredient,IngredientType,menuIngPrice} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';

@Component({
  selector: 'ingredientList',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {
  
  @Input() selectedMenu:string;
  ingTypeList:IngredientType[];
  ingList:Ingredient[];
  ownIngList:string[];
  menuIngPriceList:menuIngPrice;

  constructor(private menuItemService:MenuItemService) { 
    this.ingList = [];
    this.ownIngList = [];
    this.menuIngPriceList = {"menu":"","ingredient":[],"price":1};
    
  }

  ngOnInit() {

    console.log("this.selectedMenu"+this.selectedMenu);
    this.menuIngPriceList["menu"]=this.selectedMenu;
    this.ingredientTypeList();

  }
  
  ingredientTypeList(){
    
    const ingTypeList$ = this.menuItemService.getIngredientTypeList();
    ingTypeList$.subscribe(data =>
      {
        this.ingTypeList =  data; 
        this.ingredientList();
      });

   

  }

  ingredientList(){
    this.ingTypeList.forEach((item, index) => {
        const ingredientList$ = this.menuItemService.getIngredientByTypeId(item.id);
        console.log("item.name"+item.name);
        ingredientList$.subscribe(data => {console.log("data"+data[0]); this.ingList[item.name] = data;});
    });
  }

  clickOwnIngredient(e,ingName,ingPrice){

    console.log("clicl ");
    let price=1;
    if(e.target.checked){
      
      this.ownIngList.push(ingName);
      price=price*ingPrice;
      
      this.menuIngPriceList.ingredient = this.ownIngList;
      this.menuIngPriceList["price"] = price;
      console.log("clicl by "+this.ownIngList+price +"::"+this.menuIngPriceList["ingredient"]);
    }else{
      
      let index = this.ownIngList.indexOf(ingName);
      if (index > -1) {
          this.ownIngList.splice(index, 1);
          price=price%ingPrice;
           
           this.menuIngPriceList["ingredient"] = this.ownIngList;
            this.menuIngPriceList["price"] = price;
            console.log("not clicl by "+this.ownIngList+price+"::"+this.menuIngPriceList["ingredient"]);
      }
      
    }
    
    
  }

}
