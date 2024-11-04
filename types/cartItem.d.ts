import {Product} from "@/types/products";
import {Combo} from "@/types/combo";
import {Category} from "./category";
import {PizzaStylesEnum} from "../app/interfaces/productsType";

export type ChoosenIngredients = {
  id: number;
  uniqueId: string;
  price: number;
  ingredientQuantity?: number;
  name: string;
  category: string;
};

export type ProductOptions = {
  pizzaStyle?: string;
  pizzaSize?: string;
  calzoneType?: string;
  menuType?: string;
  friesType?: string;
  meatType?: string;
  souceType?: string;
  quantityOfPieces?: string;
  juiceType?: string;
  vaucherRecipient?: string;
  vaucherReceiveMethod?: string;
};

export type ComboRemoveBaseIngredients = {
  [productId: string]: {
    removedBaseIngredients: string[];
  };
};

export type ComboChoosenExtraIngredients = {
  [productId: string]: {
    choosenExtraIngredients: ChoosenIngredients[];
  };
};
export type ComboChoosenPizzaStyles = {
  [cardId: string]: {
    pizzaStyle: PizzaStylesEnum;
  };
};

export type ProductinCart = (Product | Combo | Halfs) & {
  cartTitle?: string;
  uniqueKey?: string;
  quantity: number;
  options: ProductOptions;
  basePrice?: number;
  removedBaseIngredients?: string[];
  choosenExtraIngredients?: ChoosenIngredients[];
};

export type ComboItem = Product & {
  choosenExtraIngredients: ChoosenComboIngredients[];
  removedBaseIngredients: string[];
  options: {};
};

export type ComboinCart = ProductinCart & {
  comboItems?: ProductinCart[]; // combo items (e.g., ["Product 1", "Product 2"])
  comboRemovedBaseIngredients?: ComboRemoveBaseIngredients;
  comboChoosenExtraIngredients?: ComboChoosenExtraIngredients;
  comboChoosenPizzaStyles?: ComboChoosenPizzaStyles;
};
