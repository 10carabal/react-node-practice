import { Link } from 'react-router-dom';

const exercises = [
  {
    day: 1,
    to: '/ejercicios/dia-1',
    title: 'useState, props y eventos',
    file: 'src/exercises/Day1Counter.tsx',
    goal: 'Contador con +1 / -1 / reset y un saludo por props.',
  },
  {
    day: 2,
    to: '/ejercicios/dia-2',
    title: 'Listas, keys y formularios',
    file: 'src/exercises/Day2TodoList.tsx',
    goal: 'Todo list: agregar, tachar, borrar y filtrar sin mutar el estado.',
  },
  {
    day: 3,
    to: '/ejercicios/dia-3',
    title: 'useEffect + fetch',
    file: 'src/exercises/Day3Users.tsx',
    goal: 'Consumir una API con loading, error y AbortController.',
  },
  {
    day: 4,
    to: '/ejercicios/dia-4',
    title: 'Custom hook',
    file: 'src/hooks/useFetch.ts',
    goal: 'Extraer el fetch a useFetch<T>(url) y reutilizarlo.',
  },
  {
    day: 5,
    to: '/ejercicios/dia-5',
    title: 'useReducer y estado derivado',
    file: 'src/exercises/Day5Cart.tsx',
    goal: 'Carrito con ADD / REMOVE / CLEAR y total calculado en render.',
  },
];

export function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero">
        <span className="pill">Práctica full stack · React + Node</span>
        <h1>
          De Angular a React, <span className="accent-text">con las manos en el código</span>
        </h1>
        <p className="lead">
          Componentes, estado, routing y consumo de APIs en el frontend, con una API
          REST propia en Express. La app de productos funciona de punta a punta y los
          ejercicios quedan como práctica guiada.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/productos">
            Ver la app de integración
          </Link>
          <a className="btn btn-ghost" href="#ejercicios">
            Ir a los ejercicios
          </a>
        </div>
      </section>

      <section className="grid grid-2">
        <article className="card">
          <h2>Cómo usarlo</h2>
          <ol className="steps">
            <li>
              Corré <code>npm run dev</code> en la raíz: levanta la API en{' '}
              <code>:3000</code> y la web en <code>:5173</code>.
            </li>
            <li>
              La app de productos consume la API real: listado, búsqueda, detalle y alta.
            </li>
            <li>
              Los ejercicios de <code>src/exercises</code> tienen comentarios{' '}
              <code>TODO</code> para practicar cada concepto.
            </li>
            <li>
              Importá la colección de <code>postman/</code> para probar los endpoints.
            </li>
          </ol>
        </article>

        <article className="card">
          <h2>Qué cubre</h2>
          <ul className="check-list">
            <li>Consumo de APIs con loading, error y cleanup</li>
            <li>Listas con <code>key</code> estable y estado inmutable</li>
            <li>Formularios controlados y validación</li>
            <li>Custom hooks y composición</li>
            <li>API REST con Express: rutas, middleware y códigos de estado</li>
          </ul>
        </article>
      </section>

      <section id="ejercicios" className="stack">
        <div className="section-head">
          <h2>Ejercicios guiados</h2>
          <p className="muted">5 ejercicios guiados, uno por concepto.</p>
        </div>

        <div className="grid grid-1">
          {exercises.map((ex) => (
            <Link key={ex.day} to={ex.to} className="exercise-row">
              <span className="day-badge">Día {ex.day}</span>
              <span className="exercise-body">
                <strong>{ex.title}</strong>
                <span className="muted">{ex.goal}</span>
              </span>
              <code className="exercise-file">{ex.file}</code>
            </Link>
          ))}
        </div>
      </section>

      <section className="note">
        <strong>Ojo con StrictMode:</strong> en desarrollo React monta, desmonta y
        vuelve a montar cada componente para detectar efectos sucios. Por eso vas a ver
        el fetch dos veces: es normal. Si no limpiás el efecto, además vas a ver el
        clásico warning de memory leak.
      </section>
    </div>
  );
}
