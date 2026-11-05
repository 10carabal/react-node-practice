import { Link } from 'react-router-dom';
import type { Product } from '../types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <span className="badge">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="muted clamp-2">{product.description}</p>
      <div className="card-footer">
        <strong className="price">${product.price.toLocaleString('es-AR')}</strong>
        <Link className="btn btn-ghost" to={`/productos/${product.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
}
