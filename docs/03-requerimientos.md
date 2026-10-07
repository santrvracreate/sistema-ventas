```markdown
# Guía 3 — Análisis de requerimientos

## Requerimientos funcionales (Caso Propio: NOCTUA — Beyond Digital)

- RF-01: El sistema debe permitir al visitante visualizar el portafolio público con la información institucional.
- RF-02: El sistema debe permitir al visitante consultar los servicios ofrecidos por la empresa.
- RF-03: El sistema debe permitir al visitante visualizar la información básica y general de los proyectos.
- RF-04: El sistema debe solicitar registro o inicio de sesión cuando un visitante intente acceder a funciones privadas.
- RF-05: El sistema debe permitir el registro de nuevos usuarios bajo el rol de cliente.
- RF-06: El sistema debe permitir a los clientes iniciar y cerrar sesión de manera segura.
- RF-07: El sistema debe permitir a los clientes autenticados consultar proyectos detalladamente.
- RF-08: El sistema debe permitir al cliente consultar la lista de sus proyectos contratados.
- RF-09: El sistema debe permitir al cliente consultar el estado actual y el avance de sus proyectos en tiempo real.
- RF-10: El sistema debe permitir al cliente enviar mensajes directos al administrador.
- RF-11: El sistema debe permitir al cliente solicitar cotizaciones personalizadas.
- RF-12: El sistema debe permitir al cliente solicitar reuniones (presenciales o virtuales).
- RF-13: El sistema debe permitir al cliente consultar el historial y estado de sus solicitudes, cotizaciones y citas.
- RF-14: El sistema debe permitir al administrador (Santiago Orellana Rivera) crear, modificar y eliminar proyectos.
- RF-15: El sistema debe permitir al administrador gestionar los registros de los clientes.
- RF-16: El sistema debe permitir al administrador crear, actualizar y eliminar los servicios ofertados.
- RF-17: El sistema debe permitir al administrador gestionar las cotizaciones y solicitudes recibidas.
- RF-18: El sistema debe permitir al administrador agendar, aprobar y gestionar las citas.
- RF-19: El sistema debe permitir al administrador gestionar y responder los mensajes de los usuarios.
- RF-20: El sistema debe permitir al administrador gestionar los usuarios y asignar sus respectivos permisos.
- RF-21: El sistema debe permitir al administrador modificar toda la información pública mostrada en el portafolio.

## Requerimientos no funcionales

- RNF-01 (Compatibilidad y Diseño): El sistema deberá contar con un diseño responsivo que funcione correctamente en computadoras, tablets y celulares.
- RNF-02 (Seguridad): El sistema deberá proteger la información privada de los clientes mediante mecanismos de autenticación.
- RNF-03 (Control de Acceso): El sistema deberá garantizar que cada usuario acceda únicamente a las funciones correspondientes a su rol (Visitante, Cliente, Administrador).
- RNF-04 (Usabilidad): El sistema deberá presentar una interfaz clara, intuitiva y fácil de utilizar para todos los tipos de usuario.
- RNF-05 (Almacenamiento): Toda la información del sistema deberá almacenarse de forma segura en una base de datos centralizada.

## Restricciones

- Debe construirse únicamente utilizando HTML, CSS, JavaScript y Supabase.
- Debe emplear el plan gratuito de Supabase para la base de datos, autenticación de usuarios y gestión de roles.
- El despliegue de la interfaz debe realizarse en plataformas web estáticas gratuitas o compatibles con el ecosistema del curso.

## Priorización (MoSCoW)

- **Debe tener (Must have):** RF-01, RF-02, RF-04, RF-05, RF-06, RF-14, RF-15, RF-16, RF-20, RF-21 (Funcionalidades base de portafolio público, registro/autenticación y administración principal).
- **Debería tener (Should have):** RF-07, RF-08, RF-09, RF-11, RF-17 (Consulta detallada de proyectos, seguimiento de avances y solicitudes de cotizaciones para clientes).
- **Podría tener (Could have):** RF-10, RF-12, RF-13, RF-18, RF-19 (Mensajería directa, agendamiento de reuniones presenciales/virtuales y gestión avanzada de citas).
- **No por ahora (Won't have):** Sistema automatizado de pagos en línea o pasarela de cobros dentro de la plataforma.

## Reflexión breve

Sí, el sistema seguiría siendo útil. Los requerimientos marcados como "Debe tener" garantizan la resolución del problema central: la presencia pública del negocio y la administración con control de acceso por roles. Incluso con una primera entrega enfocada en el catálogo público y el panel administrativo, NOCTUA — Beyond Digital logra exhibir sus servicios, captar clientes y controlar los permisos de la plataforma de forma ordenada sin depender de módulos más complejos desde el primer día.
```
