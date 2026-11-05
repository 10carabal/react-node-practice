/**
 * Repositorio en memoria. Para una práctica alcanza con esto:
 * lo que evalúan es el contrato de la API, no la base de datos.
 * Si querés sumar puntos, reemplazalo por Prisma + SQLite.
 */

/** @typedef {{ id: string, name: string, description: string, price: number, category: string, stock: number }} Product */

/** @type {Product[]} */
let products = [
  {
    id: 'p-1',
    name: 'Teclado mecánico',
    description: 'Switches táctiles, layout 75%, hot-swap',
    price: 150000,
    category: 'Periféricos',
    stock: 8,
  },
  {
    id: 'p-2',
    name: 'Mouse inalámbrico',
    description: 'Sensor 26K, 70 g, 90 h de batería',
    price: 95000,
    category: 'Periféricos',
    stock: 15,
  },
  {
    id: 'p-3',
    name: 'Monitor 27"',
    description: 'QHD 165 Hz, panel IPS',
    price: 480000,
    category: 'Monitores',
    stock: 4,
  },
  {
    id: 'p-4',
    name: 'Notebook 14"',
    description: '16 GB RAM, 512 GB SSD',
    price: 1250000,
    category: 'Computadoras',
    stock: 3,
  },
  {
    id: 'p-5',
    name: 'Hub USB-C',
    description: '7 puertos, HDMI 4K, PD 100 W',
    price: 65000,
    category: 'Accesorios',
    stock: 22,
  },
];

export function findAll() {
  return products;
}

export function findById(id) {
  return products.find((p) => p.id === id);
}

export function create(data) {
  const product = { id: crypto.randomUUID(), ...data };
  products.push(product);
  return product;
}

export function update(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  // Importante: creamos un objeto nuevo (no mutamos el existente).
  products[index] = { ...products[index], ...data, id };
  return products[index];
}

export function remove(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;

  products.splice(index, 1);
  return true;
}
