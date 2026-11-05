import type { User } from '../types';

/** API publica de prueba (no necesita backend propio). */
export async function getUsers(signal?: AbortSignal): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  return (await res.json()) as User[];
}
