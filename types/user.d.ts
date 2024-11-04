export type User = {
  id: string;
  email: string;
  password: string;
  companyName?: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  phoneCountryCode?: string;
  role?: string;
  googleId?: string;
  status?: string;
  coins?: number;
  userWallet?: number;
  hasPassword?: boolean;
  salutation?: string;
  deliveries: DeliveryAddress[];
};
