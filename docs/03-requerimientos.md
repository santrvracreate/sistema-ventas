# Guía 3 — Análisis de requerimientos

## Requerimientos funcionales (Caso Propio: Portafolio de Servicios)

- RF-01: El sistema debe permitir visualizar un catálogo interactivo con los proyectos terminados y servicios ofrecidos.
- RF-02: El sistema debe permitir al administrador (Santiago) agregar, editar o eliminar proyectos en el portafolio.
- RF-03: El sistema debe permitir a los clientes potenciales consultar la lista de servicios extra (mantenimiento, asesoramiento, etc.).
- RF-04: El sistema debe permitir registrar y gestionar el estado actual de los proyectos en curso (por iniciar, en desarrollo, entregados).
- RF-05: El sistema debe permitir el almacenamiento de datos de contacto de clientes para futuras solicitudes de servicio.
- RF-06: El sistema debe permitir un sistema de filtrado de proyectos por categoría o tecnología utilizada.

## Requerimientos no funcionales

- RNF-01 (Usabilidad): El sitio web debe ofrecer una navegación intuitiva y limpia, facilitando encontrar los servicios principales en pocos clics.
- RNF-02 (Rendimiento): Las páginas del portafolio y las imágenes de los proyectos deben cargar en menos de tres segundos para retener al usuario.
- RNF-03 (Compatibilidad): El diseño debe ser completamente responsivo para verse de manera fluida tanto en computadoras como en teléfonos celulares.
- RNF-04 (Mantenibilidad): El código fuente debe estar estructurado de forma modular (HTML, CSS, JavaScript) para facilitar futuras actualizaciones de proyectos.

## Restricciones

- Debe construirse únicamente utilizando HTML, CSS, JavaScript y Supabase.
- Debe emplear el plan gratuito de Supabase para la base de datos y gestión de proyectos.
- El despliegue de la interfaz debe realizarse en plataformas web estáticas gratuitas o compatibles con el ecosistema del curso.

## Priorización (MoSCoW)

- **Debe tener (Must have):** RF-01, RF-02, RF-03
- **Debería tener (Should have):** RF-04, RF-05
- **Podría tener (Could have):** RF-06 (Filtros avanzados por tecnología)
- **No por ahora (Won't have):** Sistema automatizado de pagos en línea o pasarela de cobros dentro de la plataforma.

## Reflexión breve

Sí, el sistema seguiría siendo útil. Los requerimientos marcados como "Debe tener" resuelven el problema principal de visibilidad: mostrar los proyectos entregados y los servicios que ofreces al público. Con un catálogo funcional y la capacidad de actualizar tus trabajos, cumples con el objetivo básico de captar nuevos clientes sin depender de herramientas complejas desde el primer día.
