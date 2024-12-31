export interface Donor {
  name: string;
  amount: number;
  avatar?: string;
}

export interface Campaign {
  id: string;
  title: string;
  location: string;
  tags: string[];
  currentAmount: number;
  goalAmount: number;
  endDate: string;
  daysLeft: number;
  images: string[];
  description: string;
}

export interface RelatedCampaign {
  id: string;
  title: string;
  location: string;
  daysLeft: number;
  currentAmount: number;
  tags: string[];
  image: string;
}
