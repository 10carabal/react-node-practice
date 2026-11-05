import { Router } from 'express';
import * as repo from '../data/products.js';
import { validate } from '../middleware/validate.js';
import { productSchema, productUpdateSchema } from '../schemas/productSchema.js';

const router = Router();

// GET /api/products?q=teclado
router.get('/', (req, res) => {
  const { q } = req.query;
  const all = repo.findAll();

  if (!q) return res.json(all);

  const term = String(q).toLowerCase();
  res.json(all.filter((p) => p.name.toLowerCase().includes(term)));
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  const product = repo.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(product);
});

// POST /api/products  -> 201 Created
router.post('/', validate(productSchema), (req, res) => {
  const product = repo.create(req.body);
  res.status(201).json(product);
});

/**
 * DIA 7 — TODO
 *
 * PUT /api/products/:id
 *   - usar validate(productUpdateSchema)
 *   - repo.update(id, req.body)
 *   - si devuelve null -> 404
 *   - si ok -> 200 con el producto actualizado
 *
 * DELETE /api/products/:id
 *   - repo.remove(id)
 *   - si devuelve false -> 404
 *   - si ok -> 204 SIN body (res.status(204).send())
 *
 * Después probalos en Postman y mirá los códigos de estado.
 */
router.put('/:id', validate(productUpdateSchema), (_req, res) => {
  res.status(501).json({ message: 'TODO día 7: implementá el PUT' });
});

router.delete('/:id', (_req, res) => {
  res.status(501).json({ message: 'TODO día 7: implementá el DELETE' });
});

export default router;
