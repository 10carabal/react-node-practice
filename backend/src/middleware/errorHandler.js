/** 404: la ruta no existe (distinto de "el recurso no existe"). */
export function notFound(req, res) {
  res.status(404).json({
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Manejador centralizado de errores.
 * Express lo reconoce como tal solo si tiene los 4 parámetros.
 */
export function errorHandler(err, _req, res, _next) {
  console.error(err);

  const status = err.status ?? 500;
  res.status(status).json({
    message: err.message ?? 'Error interno del servidor',
  });
}
