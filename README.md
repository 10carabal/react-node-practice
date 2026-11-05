# React + Node Practice

Aplicación full stack de práctica: frontend con **React 19 + TypeScript + Vite** y API REST con **Node/Express + Zod**.

El objetivo del repo es mostrar un flujo completo de integración: consumir una API, manejar estados de carga y error, validar datos en el cliente y en el servidor, y cubrir un CRUD de punta a punta.

## Qué incluye

- CRUD de productos: listado, búsqueda con debounce, detalle y alta.
- Manejo de `loading` / `error` y cancelación de requests con `AbortController`.
- Validación de formularios en el cliente y en la API con Zod.
- Routing con parámetros (`/productos/:id`).
- Ejercicios guiados con `TODO` para practicar hooks.
- Colección de Postman con casos válidos, inválidos y tests de status.

## Stack

| Capa | Tecnologías |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router |
| Backend | Node, Express, Zod, CORS |
| Herramientas | Postman, npm scripts |

## Puesta en marcha

Requisitos: Node 20 o superior.

```bash
npm install
npm run install:all
npm run dev
```

| Servicio | URL |
|---|---|
| Web | http://localhost:5173 |
| API | http://localhost:3000/api |
| Health check | http://localhost:3000/api/health |

Scripts:

```bash
npm run dev:web      # solo frontend
npm run dev:api      # solo backend
npm run typecheck    # chequeo de tipos
npm run build:web    # build de producción
```

## Estructura

```
.
├─ frontend/
│  └─ src/
│     ├─ api/            # cliente fetch + endpoints
│     ├─ components/     # Layout, Spinner, ErrorMessage, ProductCard
│     ├─ context/        # ThemeContext
│     ├─ exercises/      # ejercicios guiados con TODOs
│     ├─ hooks/          # useFetch, useDebounce
│     ├─ pages/          # Home, Products, Detail, NewProduct, 404
│     ├─ types/
│     ├─ App.tsx
│     └─ index.css
├─ backend/
│  └─ src/
│     ├─ data/           # repositorio en memoria
│     ├─ middleware/     # validate, errorHandler, notFound
│     ├─ routes/         # products.js
│     ├─ schemas/        # Zod
│     └─ server.js
└─ postman/              # colección de requests
```

## API

| Método | Ruta | Respuesta |
|---|---|---|
| GET | `/api/health` | 200 |
| GET | `/api/products?q=texto` | 200 |
| GET | `/api/products/:id` | 200 / 404 |
| POST | `/api/products` | 201 / 422 |
| PUT | `/api/products/:id` | 200 / 404 / 422 |
| DELETE | `/api/products/:id` | 204 / 404 |

Importá `postman/products-api.postman_collection.json` en Postman para probarla.

## Ejercicios

En `frontend/src/exercises/` hay cinco ejercicios con comentarios `TODO`:

| Día | Tema | Archivo |
|---|---|---|
| 1 | `useState`, props y eventos | `Day1Counter.tsx` |
| 2 | Listas, keys e inmutabilidad | `Day2TodoList.tsx` |
| 3 | `useEffect` + fetch | `Day3Users.tsx` |
| 4 | Custom hooks | `hooks/useFetch.ts` |
| 5 | `useReducer` y estado derivado | `Day5Cart.tsx` |

La app principal (`/productos`) funciona completa; los ejercicios quedan sin resolver a propósito para practicar.

## Notas

- En desarrollo, `StrictMode` monta y desmonta los componentes para detectar efectos sucios. Por eso los requests pueden aparecer duplicados y el primero como `canceled`.
- CORS está configurado para `localhost:5173`.
- Los datos de la API viven en memoria: al reiniciar el servidor se resetean.
