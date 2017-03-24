import { Component } from '@angular/core';
import {Menu,Ingredient,IngredientType,menuIngPrice} from '../menu-item/menu';
import {MenuItemService} from '../menu-item/menu-item.service';


@Component({
  selector: 'app-modal',
  template: `
  <div (click)="hide()" class="modal fade" tabindex="-1" [ngClass]="{'in': visibleAnimate}"
       [ngStyle]="{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <ng-content select=".app-modal-header"></ng-content>
        </div>
        <div class="modal-body">
          <ng-content select=".app-modal-body"></ng-content>
        </div>
        <div class="modal-footer">
          <ng-content select=".app-modal-footer"></ng-content>
        </div>
      </div>
    </div>
  </div>
  `
})
export class ModalWindow {
  finalList:menuIngPrice[];
  public visible = false;
  private visibleAnimate = false;
 
  constructor(private menuItemService:MenuItemService) {  }

  public show(finalList:menuIngPrice[]): void {
    this.finalList = finalList;
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(param?): void {
    if(param){
        let length = document.getElementsByName("selectedMenus").length;
        let i;
        for(i=0;i<length;i++){
            (<HTMLInputElement>document.getElementsByName("selectedMenus")[i]).checked = false;
        
        }
  
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        let item_no = this.menuItemService.getAddToCartItemNo();
        document.getElementById("menu-details").hidden = true;
       // document.getElementById("checkoutPara").hidden = false;
        
        //document.getElementById("checkoutBtn").innerHTML ="Checkout("+item_no+")";
    }
    
  }

  
}

