export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
}

/** Producto sin id: lo que manda el frontend al crear uno nuevo. */
export type NewProduct = Omit<Product, 'id'>;

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

export interface Player {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: { name: string };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
