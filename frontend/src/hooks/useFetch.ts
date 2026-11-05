import { useEffect, useState } from 'react';

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * DIA 4 — TODO
 *
 * Implementa un hook generico que:
 *   1. Cree los estados `data`, `loading` y `error` con useState.
 *   2. Ejecute el fetch dentro de un useEffect con [url] en las dependencias.
 *   3. Use AbortController y devuelva el cleanup `() => controller.abort()`.
 *   4. No marque error si el fetch fue abortado (e.name === 'AbortError').
 *   5. Use `loading` en true al empezar y en false en el `finally`.
 *
 * Pista (patron completo, adaptalo a un hook generico):
 *
 *   useEffect(() => {
 *     const controller = new AbortController();
 *     setLoading(true);
 *     setError(null);
 *     fetch(url, { signal: controller.signal })
 *       .then((r) => {
 *         if (!r.ok) throw new Error(`HTTP ${r.status}`);
 *         return r.json();
 *       })
 *       .then((json: T) => setData(json))
 *       .catch((e: unknown) => {
 *         if (e instanceof Error && e.name !== 'AbortError') setError(e.message);
 *       })
 *       .finally(() => setLoading(false));
 *     return () => controller.abort();
 *   }, [url]);
 */
export function useFetch<T>(url: string): UseFetchResult<T> {
  // TODO 1: crear los tres estados
  // const [data, setData] = useState<T | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO 2: implementar el fetch con AbortController y cleanup
    console.log('TODO dia 4: implementar useFetch para', url);
  }, [url]);

  return {
    data: null,
    loading: false,
    error: 'TODO dia 4: implementa useFetch en src/hooks/useFetch.ts',
  };
}
