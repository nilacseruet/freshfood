import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Menu,Ingredient,IngredientType} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';

@Component({
  selector: 'menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent implements OnInit {
  @Input() selectedMenu: Menu;
  
  test:String;
  selectedDefaultIng:Ingredient[];
  ingChooseOption:Number;

  constructor(private menuItemService:MenuItemService) { }

   ngOnInit() {
   }

   ngOnChanges(changes: SimpleChanges) {
        // only run when property "data" changed
        if (changes['selectedMenu']) {
          this.selectedDefaultIng = [];
          this.selectedMenu.defaultIng.forEach((item, index) => {
              this.getSelectedDefaultIngredient(item);
          });
             
        }
    }

    getSelectedDefaultIngredient(ingId){
       
        const ingredientList$ = this.menuItemService.getIngredientById(ingId);
        ingredientList$.subscribe(data => { this.selectedDefaultIng.push(data[0])});
    }

    chooseIng(option){
      this.ingChooseOption = option;
      
    }

}


