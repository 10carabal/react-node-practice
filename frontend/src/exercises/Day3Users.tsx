import { useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import { ErrorMessage } from '../components/ErrorMessage';
import { Spinner } from '../components/Spinner';
import type { User } from '../types';

/**
 * DIA 3 — useEffect + fetch + estados de carga
 *
 * TODO:
 *   1. Dentro del useEffect, crea un AbortController.
 *   2. setLoading(true) y setError(null) al empezar.
 *   3. Llama a getUsers(controller.signal).
 *   4. En el .then guarda los usuarios.
 *   5. En el .catch, ignora AbortError y guarda el mensaje en error.
 *   6. En el .finally pone loading en false.
 *   7. Devuelve () => controller.abort() como cleanup.
 *
 * Pista:
 *   getUsers(controller.signal)
 *     .then(setUsers)
 *     .catch((e: unknown) => {
 *       if (e instanceof Error && e.name !== 'AbortError') setError(e.message);
 *     })
 *     .finally(() => setLoading(false));
 */
export function Day3Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: implementá el efecto acá
    console.log('TODO dia 3: implementar el fetch de usuarios');
  }, []);

  return (
    <section className="stack">
      <header>
        <span className="pill">Día 3</span>
        <h1>useEffect + fetch</h1>
        <p className="muted">
          Archivo: <code>src/exercises/Day3Users.tsx</code> · API:{' '}
          <code>jsonplaceholder.typicode.com/users</code>
        </p>
      </header>

      {loading && <Spinner label="Cargando usuarios..." />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && users.length === 0 && (
        <div className="todo-box">
          TODO: todavía no hay usuarios. Implementá el efecto para traerlos.
        </div>
      )}

      {users.length > 0 && (
        <ul className="data-list">
          {users.map((user) => (
            <li key={user.id} className="data-item">
              <div>
                <strong>{user.name}</strong>
                <span className="muted"> · {user.company.name}</span>
              </div>
              <div className="muted small">
                {user.email} · {user.phone}
              </div>
            </li>
          ))}
        </ul>
      )}

      <aside className="note">
        <strong>StrictMode:</strong> vas a ver el efecto dos veces en desarrollo. Es
        intencional: React comprueba que sepas limpiar. Si no abortás, vas a tener
        respuestas que llegan fuera de orden.
      </aside>
    </section>
  );
}
