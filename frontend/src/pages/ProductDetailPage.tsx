import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productsApi } from '../api/products';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner';
import type { Product } from '../types';

/**
 * Día 6: routing con parametros.
 * useParams() es el equivalente a ActivatedRoute.snapshot.paramMap.get('id').
 */
export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    productsApi
      .get(id, controller.signal)
      .then(setProduct)
      .catch((e: unknown) => {
        if (e instanceof Error && e.name !== 'AbortError') setError(e.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [id]);

  if (loading) return <Spinner label="Buscando producto..." />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Producto no encontrado" />;

  return (
    <div className="stack">
      <Link className="back-link" to="/productos">
        ← Volver a productos
      </Link>

      <article className="card detail-card">
        <span className="badge">{product.category}</span>
        <h1>{product.name}</h1>
        <p className="muted">{product.description}</p>

        <dl className="detail-grid">
          <div>
            <dt>Precio</dt>
            <dd className="price">${product.price.toLocaleString('es-AR')}</dd>
          </div>
          <div>
            <dt>Stock</dt>
            <dd>{product.stock} unidades</dd>
          </div>
          <div>
            <dt>ID</dt>
            <dd>
              <code>{product.id}</code>
            </dd>
          </div>
        </dl>
      </article>
    </div>
  );
}
