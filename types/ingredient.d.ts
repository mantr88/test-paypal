import {Category} from "./category";

export type IngredientPrice = {
  id: number;
  productCategory?: Category;
  comboCategory?: Category;
  ingredient: Ingredient;
  price: number;
  productVariants: string;
  createdAt: string;
  updatedAt: string;
};

export type Ingredient = {
  id: number;
  name: string;
  image?: string;
  category: string;
  prices: IngredientPrice[];
  size?: string;
  createdAt: string;
  updatedAt: string;
};

export type FiltredIngredient = Ingredient & {
  uniqueId: string;
};
