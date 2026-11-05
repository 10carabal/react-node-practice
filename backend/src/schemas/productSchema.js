import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().trim().min(3, 'El nombre debe tener al menos 3 caracteres'),
  description: z.string().trim().min(1, 'La descripción es obligatoria'),
  price: z.coerce.number().positive('El precio debe ser mayor a 0'),
  category: z.string().trim().min(1, 'La categoría es obligatoria'),
  stock: z.coerce.number().int().min(0, 'El stock no puede ser negativo'),
});

/** Para PUT/PATCH: todos los campos opcionales. */
export const productUpdateSchema = productSchema.partial();
