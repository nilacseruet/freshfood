export interface Menu {
  id: Number;
  sn: string;
  name:string;
  defaultIng:Array<Number>;
  chooseIng:Array<Number>;
}

export interface Ingredient {
  id: Number;
  name:string;
  type:Number;
  price:Number;
}


export interface IngredientType {
  id: Number;
  name:string;
}

export interface menuIngPrice {
  menu:string;
  ingredient:string[];
  price:Number;
}
