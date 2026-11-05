import { useReducer } from 'react';
import type { CartItem, Product } from '../types';

/**
 * DIA 5 — useReducer + estado derivado
 *
 * TODO 1: implementa el reducer SIN mutar el estado.
 *   ADD    -> si el producto ya esta, suma 1 a quantity; si no, lo agrega
 *   REMOVE -> borra el item por id
 *   CLEAR  -> carrito vacio
 *
 * TODO 2: el total NO va en useState: calculalo con reduce en el render.
 *
 * Pregunta frecuente: ¿cuándo conviene useReducer en vez de useState?
 * Cuando el estado tiene varias transiciones relacionadas o la logica de
 * actualizacion es compleja (carrito, formulario wizard, undo/redo).
 */

const CATALOG: Product[] = [
  {
    id: 'p-1',
    name: 'Teclado mecánico',
    description: 'Switches táctiles, layout 75%',
    price: 150000,
    category: 'Periféricos',
    stock: 8,
  },
  {
    id: 'p-2',
    name: 'Mouse inalámbrico',
    description: 'Sensor 26K, 70 g',
    price: 95000,
    category: 'Periféricos',
    stock: 15,
  },
  {
    id: 'p-3',
    name: 'Monitor 27"',
    description: 'QHD 165 Hz, IPS',
    price: 480000,
    category: 'Monitores',
    stock: 4,
  },
];

type Action =
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' };

interface State {
  items: CartItem[];
}

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      // TODO 1: aca va la logica de agregar
      return state;
    case 'REMOVE':
      // TODO 1: filtrar el item
      return state;
    case 'CLEAR':
      // TODO 1: devolver { items: [] }
      return state;
    default:
      return state;
  }
}

export function Day5Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO 2: calculá el total con reduce
  const total = 0;
  const units = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <section className="stack">
      <header>
        <span className="pill">Día 5</span>
        <h1>useReducer y estado derivado</h1>
        <p className="muted">
          Archivo: <code>src/exercises/Day5Cart.tsx</code>
        </p>
      </header>

      <div className="grid grid-2">
        <div className="stack">
          <h2>Catálogo</h2>
          {CATALOG.map((product) => (
            <article key={product.id} className="card compact">
              <div>
                <strong>{product.name}</strong>
                <div className="muted small">${product.price.toLocaleString('es-AR')}</div>
              </div>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => dispatch({ type: 'ADD', product })}
              >
                Agregar
              </button>
            </article>
          ))}
        </div>

        <div className="stack">
          <h2>Carrito ({units})</h2>

          {state.items.length === 0 ? (
            <div className="empty">
              <p className="muted">Carrito vacío.</p>
            </div>
          ) : (
            <ul className="todo-list">
              {state.items.map((item) => (
                <li key={item.product.id} className="todo-item">
                  <span>
                    {item.product.name} × {item.quantity}
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => dispatch({ type: 'REMOVE', id: item.product.id })}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="card">
            <div className="total-row">
              <span>Total</span>
              <strong className="price">${total.toLocaleString('es-AR')}</strong>
            </div>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => dispatch({ type: 'CLEAR' })}
              disabled={state.items.length === 0}
            >
              Vaciar carrito
            </button>
          </div>
        </div>
      </div>

      <aside className="note">
        <strong>Regla:</strong> si se puede calcular a partir de props o estado, no es
        estado. El total se recalcula en cada render (es barato); guardarlo en useState
        te obliga a mantenerlo sincronizado a mano y es una fuente de bugs.
      </aside>
    </section>
  );
}
