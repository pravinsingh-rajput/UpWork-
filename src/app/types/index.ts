export interface Donor {
  name: string;
  amount: number;
  avatar?: string;
}

export interface Campaign {
  id: string;
  title: string;
  location: string;
  daysLeft: number;
  currentAmount: number;
  goalAmount: number;
  tags: string[];
  image: string;
  collected?: number;
}

export interface MenuItem {
  label: string;
  href: string;
}
