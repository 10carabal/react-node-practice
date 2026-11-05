import { NavLink, Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const mainLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos', end: false },
];

const exerciseLinks = [
  { to: '/ejercicios/dia-1', label: 'Día 1' },
  { to: '/ejercicios/dia-2', label: 'Día 2' },
  { to: '/ejercicios/dia-3', label: 'Día 3' },
  { to: '/ejercicios/dia-4', label: 'Día 4' },
  { to: '/ejercicios/dia-5', label: 'Día 5' },
  { to: '/ejercicios/formulario', label: 'Formulario' },
  { to: '/ejercicios/practica', label: 'Práctica' },
];

export function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            <span className="brand-dot" />
            react<span className="brand-thin">/node</span>
          </NavLink>

          <nav className="nav" aria-label="Principal">
            {mainLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}

            <span className="nav-divider" aria-hidden="true" />

            {exerciseLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="btn btn-ghost btn-icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title="Cambiar tema"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>React 19 + Node/Express · proyecto de práctica</span>
          <span className="muted">Frontend, API y ejercicios en src/exercises</span>
        </div>
      </footer>
    </div>
  );
}
