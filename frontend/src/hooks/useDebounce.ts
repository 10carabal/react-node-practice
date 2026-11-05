import { useEffect, useState } from 'react';

/**
 * Retrasa un valor: se usa para no disparar una busqueda en cada tecla.
 * Ejemplo: const q = useDebounce(search, 300);
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
