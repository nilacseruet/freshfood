import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Menu,Ingredient,IngredientType} from './menu';



@Injectable()
export class MenuItemService {

  menuList: Observable<Menu[]>;
  errorMessage: string;
  test:any;
  constructor(private _http: Http) { }
 
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


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}



