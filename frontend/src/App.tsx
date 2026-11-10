import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Day1Counter } from './exercises/Day1Counter';
import { Day2TodoList } from './exercises/Day2TodoList';
import { Day3Users } from './exercises/Day3Users';
import { Day4UseFetch } from './exercises/Day4UseFetch';
import { Day5Cart } from './exercises/Day5Cart';
import { HomePage } from './pages/HomePage';
import { NewProductPage } from './pages/NewProductPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ProductsPage } from './pages/ProductsPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* App de integracion: lista + buscador + alta + detalle */}
        <Route path="productos" element={<ProductsPage />} />
        <Route path="productos/nuevo" element={<NewProductPage />} />
        <Route path="productos/:id" element={<ProductDetailPage />} />

        {/* Ejercicios guiados */}
        <Route path="ejercicios/dia-1" element={<Day1Counter />} />
        <Route path="ejercicios/dia-2" element={<Day2TodoList />} />
        <Route path="ejercicios/dia-3" element={<Day3Users />} />
        <Route path="ejercicios/dia-4" element={<Day4UseFetch />} />
        <Route path="ejercicios/dia-5" element={<Day5Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
