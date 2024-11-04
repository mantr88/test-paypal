import {OrderStatus, DeliveryMethod} from "@/app/interfaces/order";
import {ChoosenIngredients, ProductOptions} from "./cartItem";
import {PaymentMethodEnum} from "./paymentMethod";

export type ProductToOrder = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  isOnSale: boolean;
  amount: number;
  options: ProductOptions;
  removedBaseIngredients?: string[];
  choosenExtraIngredients?: ChoosenIngredients[];
  isAlcohol: boolean;
  cartTitle?: string;
};

export type BaseOrderData = {
  userId: number;
  productToOrder: ProductToOrder[];
  productsAmount: number;
  amount: number;
  deliveryMethod: DeliveryMethod;
};

export type Order = BaseOrderData & {
  id: number;
  status: OrderStatus;
  companyName?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment: string;
  paymentMethod: PaymentMethodEnum;
  paymentStatus?: boolean;
  change?: string;
  orderCashback: number;
  cashbackUsed?: number;
  isPreOrder?: boolean;
  preOrderDate?: string;
  preOrderTime?: string;
  deliveryAddress?: string;
  tipPercentage?: number;
  subscribeForDiscount?: boolean;
  //last added
  tipAmount?: number;
  tax7?: number;
  tax19?: number;
  taxOfDelivery?: number;
  deposits?: Record<string, number>;
  eurosUsed?: number;
  costOfDelivery?: number;
};
