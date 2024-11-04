export type Combo = {
  id: number;
  image: string;
  imageMobile: string | null;
  category: string;
  name: string;
  description: string;
  ingredientsPickUp: boolean;
  data: any[];
  price?: number;
  newPrice?: number;
};
