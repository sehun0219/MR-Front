export interface SizeOption {
  id: number;
  label: 'S' | 'M' | 'L';
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: SizeOption[];
}
