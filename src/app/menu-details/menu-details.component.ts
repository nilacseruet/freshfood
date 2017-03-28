import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Menu,Ingredient,IngredientType,menuIngPrice} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';

@Component({
  selector: 'menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  @Input() selectedMenu: Menu;
  
  test:string;
  selectedDefaultIng:Ingredient[];
  ingChooseOption:number;
  menuIngPriceList:menuIngPrice;

  constructor(private menuItemService:MenuItemService) { }

   ngOnInit() {
     this.menuIngPriceList = {"menu":"","ingredient":[],"price":0,"quantity":1};
    
   }

   ngOnChanges(changes: SimpleChanges) {
        // only run when property "data" changed
        this.ingChooseOption = 0;
        //console.log("changesssssmenu");
        if (changes['selectedMenu']) {
          console.log("changes menu");
          this.selectedDefaultIng = [];
          this.selectedMenu.defaultIng.forEach((item, index) => {
              this.getSelectedDefaultIngredient(item);
          });
             
        }
    }

    getSelectedDefaultIngredient(ingId){
       
        const ingredientList$ = this.menuItemService.getIngredientById(ingId);
        ingredientList$.subscribe(data => { console.log("test"+data[0]); this.selectedDefaultIng.push(data[0])});
    }

    chooseIng(option){
      this.ingChooseOption = option;
      if(option==2){
          this.menuIngPriceList = {"menu":"","ingredient":[],"price":0,"quantity":1};
          this.menuIngPriceList["menu"]=this.selectedMenu.name;
          this.selectedDefaultIng.forEach((item, index) => {
              this.menuIngPriceList.ingredient.push(item.name);
              this.menuIngPriceList["price"] +=item.price;
          });
          
      }
    }

}


