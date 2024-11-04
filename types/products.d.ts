import {Category} from "./category";
import {Filter} from "./filter";
import {Ingredient} from "./ingredient";

export type Allergen = {
  id: number;
  allergen: string;
  ingredient: string | null;
  createdAt: string;
  updatedAt: string;
};

export type NutritionalValue = {
  id: number;
  energyKcal: string;
  energyKj: string;
  fat: string;
  sugar: string;
  protein: string;
  salt: string;
  carbohydrates: string;
  saturatedFattyAcids: string;
  caffeine: string;
  dietaryFiber: string;
  natrium: string;
  productId: number;
  createdAt: string;
  updatedAt: string;
};

export type Additive = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type BaseIngredients = Ingredient & {
  isDelete: boolean;
  canBeRemoved: boolean;
};

export type ExtraIngredient = {
  id: number;
  name: string;
  ingredient: Ingredient;
  createdAt: string;
  updatedAt: string;
};

export type ProductIngredients = {
  id: number;
  canBeRemoved: boolean;
  ingredient: Ingredient;
};

export type ProductVariant = {
  id: number;
  variantName: string;
  price: number;
  newPrice?: number;
  createdAt: string;
  updatedAt: string;
};

export type Characteristics = {
  pricePerLiter?: string;
  volume?: string;
  deposit?: string;
  drinkIngredients?: string;
  distributor?: string;
  title?: string;
  hasFreeSauce?: boolean;
};

export type Product = {
  id: number;
  type: string;
  ingredientsPickUp?: boolean;
  imageMobile?: string;
  uniqueId?: string;
  name: string;
  description?: string;
  title?: string;
  price?: number;
  newPrice?: number;
  pricePerLiter?: string;
  extraFee?: number;
  image: string;
  imageMenu?: string;
  imageModal?: string;
  halfRightImage?: string;
  halfLeftImage?: string;
  category: Category;
  productIngredients?: ProductIngredients[];
  drinkIngredients?: string;
  filters: Filter[];
  isNew?: boolean;
  prefixAb?: boolean;
  allergens?: Allergen[];
  additives?: Additive[];
  disabled?: boolean;
  endOfLimitedTimeOffer?: string;
  isAlcohol?: boolean;
  isHalfs?: boolean;
  hasMenu?: boolean;
  hasExtraSouce?: boolean;
  characteristics?: Characteristics;
  nutritionalValues?: NutritionalValue;
  extraIngredients?: ExtraIngredient[];
  hasVariants: boolean;
  productVariants?: ProductVariant[];
  comboItems?: ComboItem[];
  comboCategory?: Category;
  createdAt: string;
  updatedAt: string;
};
