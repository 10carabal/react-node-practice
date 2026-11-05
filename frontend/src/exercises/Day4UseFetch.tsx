import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner';
import { useFetch } from '../hooks/useFetch';
import type { User } from '../types';

/**
 * DIA 4 — Custom hooks
 *
 * Este componente YA ESTA ESCRITO: no lo toques.
 * Solo funciona cuando implementes `useFetch` en src/hooks/useFetch.ts.
 *
 * Lo importante: la logica de fetch vive en un hook reutilizable y el
 * componente queda enfocado en la UI. En Angular eso era un servicio
 * inyectado; en React es una funcion que compone hooks.
 */
export function Day4UseFetch() {
  const { data, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );

  return (
    <section className="stack">
      <header>
        <span className="pill">Día 4</span>
        <h1>Custom hook: useFetch</h1>
        <p className="muted">
          Implementalo en <code>src/hooks/useFetch.ts</code>
        </p>
      </header>

      {loading && <Spinner label="useFetch está trabajando..." />}
      {error && <ErrorMessage message={error} />}

      {data && (
        <ul className="data-list">
          {data.map((user) => (
            <li key={user.id} className="data-item">
              <strong>{user.name}</strong>
              <span className="muted small">{user.email}</span>
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && !data && (
        <div className="todo-box">Sin datos: el hook todavía no hace el fetch.</div>
      )}
    </section>
  );
}
