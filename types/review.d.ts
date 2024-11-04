import {YesNo, SourceReview} from "../app/interfaces/review";
export type Review = {
  id: number;
  googleId: string | null;
  authorName: string;
  authorEmail: string | null;
  authorPhotoUrl: string | null;
  comment: string | null;
  priority: number;
  isApproved: boolean;
  source: SourceReview;
  averageRating: number;
  authorId?: number | null;
  branch: string | null;
  deliveryTime: number | null;
  friendliness: number | null;
  usability: number | null;
  taste: number | null;
  appearance: number | null;
  temperature: number | null;
  deliveryComplete: YesNo;
  reorder: YesNo;
  orderDetails: string[] | null;
  createdAt: string;
  updatedAt: string;
};

export type ReviewForSlider = {
  id: number;
  authorName: string;
  authorPhotoUrl: string | null;
  comment: string | null;
  priority: number;
  isApproved: boolean;
  source: SourceReview;
  averageRating: number;
  createdAt: Date;
};
