/**
 * Middleware de validación: recibe un schema de Zod y devuelve un middleware.
 * Patrón "currying" útil para explicar en una revisión de código.
 *
 * 422 Unprocessable Entity: el JSON está bien formado pero los datos no son válidos.
 */
export function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const message = result.error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join(' | ');

      return res.status(422).json({
        message,
        issues: result.error.issues,
      });
    }

    // Reemplazamos el body por los datos ya normalizados (trim, coerción).
    req.body = result.data;
    next();
  };
}
