export type DeliveryZone = {
  id: number;
  postCode: string;
  city: string;
  area: string;
  minOrderAmount: number;
  deliveryTime: number;
  shippingCost: number;
  updatedAt: string;
  createdAt: string;
};

export type DeliveryAddress = {
  id: number;
  addressName: string;
  postCode: string;
  city: string;
  street: string;
  house: string;
  isPrivateHouse: boolean;
  notes: string;
  userId: number;
  deliveryZone: DeliveryZone;
  updatedAt: string;
  createdAt: string;
};
