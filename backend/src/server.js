import cors from 'cors';
import express from 'express';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import productsRouter from './routes/products.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  }),
);
app.use(express.json());

// Health check: útil para probar en Postman antes de tocar nada.
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.use('/api/products', productsRouter);

// 404 y manejador de errores SIEMPRE al final, en ese orden.
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}/api`);
});
