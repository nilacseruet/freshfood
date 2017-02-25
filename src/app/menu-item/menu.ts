export class Menu {
  id: Number;
  sn: string;
  name:string;
  defaultIng:Array<Number>;
  chooseIng:Array<Number>;
}

export class Ingredient {
  id: Number;
  name:string;
  type:Number;
}


export class IngredientType {
  id: Number;
  name:string;
}