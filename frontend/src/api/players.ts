import type { Player } from '../types';

/** API publica de prueba (no necesita backend propio). */
export async function getPlayers(signal?: AbortSignal): Promise<Player[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  return (await res.json()) as Player[];
}
