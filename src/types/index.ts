export type CategoryType = 'todos' | 'aneis' | 'brincos' | 'colares' | 'pulseiras' | 'conjunto';

export interface Product {
  id: number;
  name: string;
  category: CategoryType;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CategoryButton {
  id: CategoryType;
  label: string;
}