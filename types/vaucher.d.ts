import {User} from "./user";

export type VaucherDto = {
  amount: number;
  recipientEmail?: string;
  recipientFirstName?: string;
  recipientLastName?: string;
  scheduledDate?: string;
  orderId: number;
};

export type Vaucher = VaucherDto & {
  id: number;
  code: string;
  isActivated: boolean;
  pdfPath?: string;
  pdfFileName?: string;
  isEmailSent?: boolean;
  createdAt: Date;
  purchaser?: User;
};
