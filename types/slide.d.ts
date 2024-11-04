export type Slide = {
  id: number;
  href: string;
  name: string;
  image: string;
  isShown: boolean;
  priority: number;
  title?: string;
  description?: string;
  badgeText?: string;
  badgeColor?: string;
  badgeBgColor?: string
  stories?: StoryType[];
  linkText?: string;
  promotiontext?: string;
  promotionTextColor?: string;

};
