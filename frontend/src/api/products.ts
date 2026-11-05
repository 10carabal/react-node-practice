import type { NewProduct, Product } from '../types';
import { api } from './client';

export const productsApi = {
  list: (signal?: AbortSignal) => api.get<Product[]>('/products', { signal }),
  get: (id: string, signal?: AbortSignal) =>
    api.get<Product>(`/products/${id}`, { signal }),
  create: (data: NewProduct) => api.post<Product>('/products', data),
  update: (id: string, data: Partial<NewProduct>) =>
    api.put<Product>(`/products/${id}`, data),
  remove: (id: string) => api.delete<void>(`/products/${id}`),
};
