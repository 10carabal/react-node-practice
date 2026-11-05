import { useState } from 'react';

/**
 * DIA 1 — useState, props y eventos
 *
 * Objetivo: perderle el miedo al estado local.
 *
 * TODO 1: crea el estado `count` (empieza en 0) con useState.
 * TODO 2: agrega tres botones:
 *           +1  -> setCount((c) => c + 1)
 *           -1  -> setCount((c) => c - 1)
 *           reset -> setCount(0)
 *         Usa la forma funcional cuando el nuevo valor depende del anterior.
 * TODO 3: muestra <Greeting name="tu nombre" /> y comproba que el hijo
 *         NO puede modificar las props (son de solo lectura).
 *
 * Diferencia con Angular: no hay [(ngModel)] ni @Input(). Las props son
 * parametros de la funcion y los eventos son funciones que bajan como props.
 */

// Este componente ya esta resuelto: es tu referencia de "props".
function Greeting({ name }: { name: string }) {
  return <p className="muted">Hola, {name}. Este texto viene por props.</p>;
}

export function Day1Counter() {
  // TODO 1: descomenta y usa el estado
  // const [count, setCount] = useState(0);

  return (
    <section className="stack">
      <header>
        <span className="pill">Día 1</span>
        <h1>useState, props y eventos</h1>
        <p className="muted">
          Archivo: <code>src/exercises/Day1Counter.tsx</code>
        </p>
      </header>

      <Greeting name="candidato/a" />

      <div className="card">
        <h2>Contador</h2>
        <div className="todo-box">
          TODO: implementá el contador acá (estado + botones + reset).
        </div>

        {/* TODO 2: reemplaza el div de arriba por algo asi:
        <p className="counter-value">{count}</p>
        <div className="row">
          <button className="btn btn-ghost" onClick={() => setCount((c) => c - 1)}>-1</button>
          <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>+1</button>
          <button className="btn btn-ghost" onClick={() => setCount(0)}>Reset</button>
        </div>
        */}
      </div>

      <aside className="note">
        <strong>Para recordar:</strong> ¿por qué <code>setCount(c =&gt; c + 1)</code> y no{' '}
        <code>setCount(count + 1)</code>? Porque el estado se actualiza de forma
        asincrona y por lotes (batching): la forma funcional siempre recibe el valor
        mas reciente.
      </aside>
    </section>
  );
}
