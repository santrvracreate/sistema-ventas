# Configuración de Supabase (Guía 9)

**Nombre del proyecto:** sistema-ventas (ejemplo)
**Región elegida:** (ejemplo: South America - São Paulo)

## Tablas creadas
Las siguientes tablas fueron creadas en la base de datos de Supabase.

**Creadas con Table Editor:**
- `productos`
- `usuarios`
- `ventas`
- `detalle_venta`

**Creadas con SQL:**
- `clientes`

Todas las cinco tablas coinciden con el modelo de datos diseñado en la Guía 6.

## Row Level Security (RLS)
Se ha activado RLS en las cinco tablas del proyecto con la siguiente configuración:

- `productos`: RLS activo - política "Solo autenticados" (ALL, auth.role() = 'authenticated')
- `clientes`: RLS activo - misma política
- `usuarios`: RLS activo - misma política
- `ventas`: RLS activo - misma política
- `detalle_venta`: RLS activo - misma política
