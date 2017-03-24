export interface Menu {
  id: number;
  sn: string;
  name:string;
  defaultIng:Array<number>;
  chooseIng:Array<number>;
}

export interface Ingredient {
  id: number;
  name:string;
  type:number;
  price:number;
}


export interface IngredientType {
  id: number;
  name:string;
}

export interface menuIngPrice {
  menu:string;
  ingredient:string[];
  price:number;
  quantity:number;
  finalPrice ?:number;
}
