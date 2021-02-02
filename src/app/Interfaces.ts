export interface NewsElement {
  title: string;
  date: string;
  short: string;
  icon: NewsIcon;
  active: boolean;
}

interface NewsIcon {
  type: string;
  url?: string;
}