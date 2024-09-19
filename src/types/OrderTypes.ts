export interface OrderTypesProps {
  title: string;
  date: string;
  toggle: boolean;
  id: number;
  setToggle: number;
}

export interface PriceItem {
  symbol: string;
  value: number;
}

export interface Product {
  id: number;
  title: string;
  price: PriceItem[];
  photo: string;
  code: string;
  status: string;
}

export interface OrderDescriptionTypes {
  id: number;
  title: string;
  date: string;
  products: Product[];
}

