import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { productsApi } from '../api/products';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductCard } from '../components/ProductCard';
import { Spinner } from '../components/Spinner';
import { useDebounce } from '../hooks/useDebounce';
import type { Product } from '../types';

/**
 * Referencia de integracion (día 3 y 6 aplicados a un caso real).
 * Fijate el patron: estado de datos + loading + error, cleanup y estado derivado.
 */
export function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [reloadKey, setReloadKey] = useState(0);

  const debouncedSearch = useDebounce(search, 250);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    productsApi
      .list(controller.signal)
      .then(setProducts)
      .catch((e: unknown) => {
        if (e instanceof Error && e.name !== 'AbortError') setError(e.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [reloadKey]);

  // Estado derivado: NO va en useState, se calcula en el render.
  const visible = products.filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  return (
    <div className="stack">
      <div className="page-head">
        <div>
          <h1>Productos</h1>
          <p className="muted">
            {loading ? 'Cargando...' : `${visible.length} de ${products.length} productos`}
          </p>
        </div>
        <Link className="btn btn-primary" to="/productos/nuevo">
          + Nuevo producto
        </Link>
      </div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Buscar por nombre o categoría..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar productos"
        />
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => setReloadKey((k) => k + 1)}
        >
          Recargar
        </button>
      </div>

      {loading && <Spinner label="Trayendo productos de la API..." />}
      {error && <ErrorMessage message={error} onRetry={() => setReloadKey((k) => k + 1)} />}

      {!loading && !error && visible.length === 0 && (
        <div className="empty">
          <p>No hay productos que coincidan con “{debouncedSearch}”.</p>
          <Link className="btn btn-ghost" to="/productos/nuevo">
            Crear el primero
          </Link>
        </div>
      )}

      {!loading && !error && visible.length > 0 && (
        <div className="grid grid-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
