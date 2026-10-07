# Configuración de Supabase (Guía 9)

**Nombre del proyecto:** portafoleo
**Región elegida:** southamerica-east1 (sao paulo)

## Tablas creadas

Las siguientes tablas fueron creadas en la base de datos de Supabase.

**Creadas con Table Editor:**

- `clientes`
- `categorias`
- `proyectos`
- `solicitudes`

**Creadas con SQL:**

- `auth.users`

Todas las cinco tablas coinciden con el modelo de datos diseñado en la Guía 6.

## Row Level Security (RLS)

Se ha activado RLS en las cinco tablas del proyecto con la siguiente configuración:

- `clientes`: RLS activo - política "Solo autenticados" (ALL, auth.role() = 'authenticated')
- `categorias`: RLS activo - política "Solo autenticados" (ALL, auth.role() = 'authenticated')
- `proyectos`: RLS activo - política "Solo autenticados" (ALL, auth.role() = 'authenticated')
- `solicitudes`: RLS activo - política "Solo autenticados" (ALL, auth.role() = 'authenticated')
