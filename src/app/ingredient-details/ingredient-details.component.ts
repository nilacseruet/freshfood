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
    this.menuIngPriceList = {"menu":"","ingredient":[],"price":0,"quantity":1};
    
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

  
    if(e.target.checked){
      
      this.ownIngList.push(ingName);
      this.menuIngPriceList["price"] +=ingPrice;
      this.menuIngPriceList.ingredient = this.ownIngList;
      
      window.scrollTo(0, 1500);
    }else{
      
      let index = this.ownIngList.indexOf(ingName);
      if (index > -1) {
          this.ownIngList.splice(index, 1);
          this.menuIngPriceList["price"] = this.menuIngPriceList["price"] - ingPrice;
          this.menuIngPriceList["ingredient"] = this.ownIngList;
           window.scrollTo(0, window.outerHeight+100);
      }
      
    }
    
    
  }

}
