import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Menu,Ingredient,IngredientType,menuIngPrice} from './menu';



@Injectable()
export class MenuItemService {
 
  menuList: Observable<Menu[]>;
  errorMessage: string;
  finalList:menuIngPrice[];
  finalPrice:number;

  constructor(private _http: Http) { 
      this.finalList = [];
      this.finalPrice = 0;
    }
 
   getMenuList() {
       return this.getMenuListObservable();
       //return this.menuList;
   }
 
 
  
    getMenuListObservable(): Observable<Menu[]> {
        return this._http.get('app/menu-item/menu-list.json')
            .map((response: Response) => <Menu[]>response.json().menuList)
            .do(data => console.log("list"+JSON.stringify(data)))
            .catch(this.handleError);
    }
 
    getIngredientById(id): Observable<Ingredient>{
       
         return this._http.get('app/menu-item/ingredient-list.json')
            .map((response: Response) => <Ingredient[]>response.json().ingredientList
            .filter(data=>data.id == id))
            .do(data => console.log("nila"+(data)))
            .catch(this.handleError);
    }

    getIngredientTypeList():Observable<IngredientType[]>{
        return this._http.get('app/menu-item/ingredient-type.json')
            .map((response: Response) => <IngredientType[]>response.json().ingredientTypeList)
            //.do(data => console.log("ingredientTypeList"+JSON.stringify(data)))
            .catch(this.handleError);
    }


    getIngredientByTypeId(typeId): Observable<Ingredient[]>{
         return this._http.get('app/menu-item/ingredient-list.json')
            .map((response: Response) => <Ingredient[]>response.json().ingredientList
            .filter(data=>data.type == typeId))
            .do(data => console.log("nila"+JSON.stringify(data)))
            .catch(this.handleError);
    }

    addSelectedItemOnFinalList(singleItem:menuIngPrice):menuIngPrice[]{
         this.finalPrice +=singleItem.price;
         singleItem.finalPrice = this.finalPrice;
         //console.log(singleItem.price);
         this.finalList.push(singleItem);
         return this.finalList;
    }

    getAddToCartItemNo():number{
        return this.finalList.length;
    }
   
    getFinalList():menuIngPrice[]{
         return this.finalList;
    }

    removeItemFromFinalList(item:string):menuIngPrice[]{
        let exist = this.finalList.filter(data=>data.menu==item);

        //console.log(exist.length+" "+exist[0])
        if(exist.length>0){
            let index = this.finalList.indexOf(exist[0]);
            if (index > -1) {
                this.finalList.splice(index, 1);
            }
        }

        return this.finalList;
    }

    isNotExistItemOnCart(item:string):number{
        let exist = this.finalList.filter(data=>data.menu==item);
        if(exist.length==0)
            return 1;
        else
            return 0;
    }


    emptyList(){
        this.finalList = [];
        this.finalPrice = 0;
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



