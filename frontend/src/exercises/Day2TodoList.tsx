import { useState, type SubmitEvent } from 'react';

/**
 * DIA 2 — Listas, keys, formularios controlados y estado inmutable
 *
 * TODO 1: implementa addTodo
 *   - preventDefault()
 *   - ignorar texto vacio
 *   - id con crypto.randomUUID()
 *   - agregar SIN mutar: setTodos((prev) => [...prev, nuevo])
 *   - limpiar el input
 *
 * TODO 2: implementa toggleTodo
 *   - setTodos((prev) => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
 *
 * TODO 3: implementa removeTodo
 *   - setTodos((prev) => prev.filter(t => t.id !== id))
 *
 * TODO 4: estado derivado
 *   - `visible` NO va en useState: filtralo en el render segun `filter`.
 *
 * Extra: agrega un contador de pendientes (tambien derivado).
 */

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

type Filter = 'all' | 'active' | 'done';

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'active', label: 'Activas' },
  { value: 'done', label: 'Completadas' },
];

export function Day2TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  function addTodo(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO 1
  }

  function toggleTodo(id: string) {
    // TODO 2
  }

  function removeTodo(id: string) {
    // TODO 3
  }

  // TODO 4: reemplaza por el filtro real (estado derivado)
  const visible = todos;
  const pending = todos.filter((t) => !t.done).length;

  return (
    <section className="stack">
      <header>
        <span className="pill">Día 2</span>
        <h1>Listas, keys y formularios</h1>
        <p className="muted">
          Archivo: <code>src/exercises/Day2TodoList.tsx</code> · pendientes:{' '}
          <strong>{pending}</strong>
        </p>
      </header>

      <form className="toolbar" onSubmit={addTodo}>
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="¿Qué tenés que hacer?"
          aria-label="Nueva tarea"
        />
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>

      <div className="row">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            className={filter === f.value ? 'btn btn-primary' : 'btn btn-ghost'}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <div className="empty">
          <p className="muted">No hay tareas todavía. Agregá una para empezar.</p>
        </div>
      ) : (
        <ul className="todo-list">
          {visible.map((todo) => (
            <li key={todo.id} className={todo.done ? 'todo-item done' : 'todo-item'}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
              </label>
              <button
                type="button"
                className="btn btn-ghost btn-small"
                onClick={() => removeTodo(todo.id)}
                aria-label={`Borrar ${todo.text}`}
              >
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}

      <aside className="note">
        <strong>Pregunta segura:</strong> ¿por qué <code>key={'{todo.id}'}</code> y no el
        índice? Porque React reconcilia por key: con el índice, al borrar o reordenar
        reutiliza nodos equivocados y se rompe el estado interno del ítem.
      </aside>
    </section>
  );
}
