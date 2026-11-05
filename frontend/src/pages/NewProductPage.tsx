import { useState, type SubmitEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productsApi } from '../api/products';
import type { NewProduct } from '../types';

interface FormState {
  name: string;
  description: string;
  category: string;
  price: string;
  stock: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = {
  name: '',
  description: '',
  category: '',
  price: '',
  stock: '',
};

/** Referencia de formulario controlado + validacion + submit async. */
export function NewProductPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [saving, setSaving] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const next: FormErrors = {};

    if (form.name.trim().length < 3) next.name = 'Mínimo 3 caracteres';
    if (!form.description.trim()) next.description = 'La descripción es obligatoria';
    if (!form.category.trim()) next.category = 'La categoría es obligatoria';
    if (!form.price || Number(form.price) <= 0) next.price = 'Tiene que ser mayor a 0';
    if (!form.stock || Number(form.stock) < 0) next.stock = 'No puede ser negativo';

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    const payload: NewProduct = {
      name: form.name.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
    };

    try {
      setSaving(true);
      await productsApi.create(payload);
      navigate('/productos');
    } catch (e: unknown) {
      setApiError(e instanceof Error ? e.message : 'No se pudo guardar');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="stack">
      <Link className="back-link" to="/productos">
        ← Volver a productos
      </Link>

      <div className="page-head">
        <h1>Nuevo producto</h1>
      </div>

      {apiError && <div className="error-box" role="alert">{apiError}</div>}

      <form className="card form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            className={errors.name ? 'input invalid' : 'input'}
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Teclado mecánico"
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="field">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            className={errors.description ? 'input invalid' : 'input'}
            rows={3}
            value={form.description}
            onChange={(e) => update('description', e.target.value)}
            placeholder="Switches táctiles, layout 75%"
          />
          {errors.description && <span className="field-error">{errors.description}</span>}
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="category">Categoría</label>
            <input
              id="category"
              className={errors.category ? 'input invalid' : 'input'}
              value={form.category}
              onChange={(e) => update('category', e.target.value)}
              placeholder="Periféricos"
            />
            {errors.category && <span className="field-error">{errors.category}</span>}
          </div>

          <div className="field">
            <label htmlFor="price">Precio</label>
            <input
              id="price"
              type="number"
              min="0"
              step="0.01"
              className={errors.price ? 'input invalid' : 'input'}
              value={form.price}
              onChange={(e) => update('price', e.target.value)}
              placeholder="150000"
            />
            {errors.price && <span className="field-error">{errors.price}</span>}
          </div>

          <div className="field">
            <label htmlFor="stock">Stock</label>
            <input
              id="stock"
              type="number"
              min="0"
              className={errors.stock ? 'input invalid' : 'input'}
              value={form.stock}
              onChange={(e) => update('stock', e.target.value)}
              placeholder="10"
            />
            {errors.stock && <span className="field-error">{errors.stock}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit" disabled={saving}>
            {saving ? 'Guardando...' : 'Guardar producto'}
          </button>
          <Link className="btn btn-ghost" to="/productos">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
