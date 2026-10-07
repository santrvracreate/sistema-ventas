# Guía 4 — Historias de usuario

## Historias de usuario

### Mi caso propio (NOCTUA — Beyond Digital)

- HU-01: Como visitante, quiero visualizar los proyectos de NOCTUA, para conocer los trabajos realizados.
- HU-02: Como visitante, quiero consultar los servicios ofrecidos, para saber qué soluciones puedo contratar.
- HU-03: Como visitante, quiero registrarme en la plataforma, para acceder a las funciones privadas del sistema.
- HU-04: Como cliente, quiero visualizar los proyectos detalladamente, para conocer sus características, tecnologías e información.
- HU-05: Como cliente, quiero consultar mis proyectos contratados, para conocer su información.
- HU-06: Como cliente, quiero consultar el estado y avance de mis proyectos, para saber cómo se encuentra el desarrollo.
- HU-07: Como cliente, quiero enviar mensajes al administrador, para comunicar dudas o solicitudes relacionadas con mis proyectos.
- HU-08: Como cliente, quiero solicitar una cotización, para conocer el costo aproximado de un servicio.
- HU-09: Como cliente, quiero solicitar una reunión presencial o virtual, para conversar sobre mi proyecto.
- HU-10: Como administrador (Santiago), quiero crear, modificar y eliminar proyectos, para mantener actualizado el portafolio.
- HU-11: Como administrador (Santiago), quiero administrar los clientes registrados, para mantener organizada la información.
- HU-12: Como administrador (Santiago), quiero consultar y responder mensajes de los clientes, para mantener comunicación con ellos.
- HU-13: Como administrador (Santiago), quiero gestionar los usuarios y sus permisos, para controlar el acceso al sistema.

## Criterios de aceptación

### HU-01

- El visitante puede ver una lista o galería pública de proyectos.
- Cada proyecto muestra su nombre, imagen principal y una breve descripción.

### HU-02

- El visitante puede visualizar la lista completa de servicios ofrecidos.
- Cada servicio detalla su nombre, descripción general y alcance.

### HU-03

- El visitante dispone de un formulario con campos para nombre, correo y contraseña.
- Al completar el registro correctamente, el usuario queda guardado bajo el rol de cliente.

### HU-04

- El cliente autenticado puede hacer clic en un proyecto para ver sus detalles completos.
- Se muestran las tecnologías utilizadas, imágenes secundarias y especificaciones del trabajo.

### HU-05

- El cliente autenticado puede acceder a una sección privada con la lista de sus proyectos asignados.
- Se muestra la información básica y el tipo de servicio contratado.

### HU-06

- El cliente puede ver el estado actual del proyecto (por iniciar, en desarrollo, entregado).
- Se muestra una barra o porcentaje de avance en tiempo real.

### HU-07

- El cliente cuenta con un formulario interno para redactar y enviar un mensaje al administrador.
- El mensaje enviado queda registrado en el historial de comunicación con fecha y hora.

### HU-08

- El cliente puede seleccionar un servicio de interés y completar una solicitud de presupuesto.
- La solicitud se registra en el sistema y notifica al administrador.

### HU-09

- El cliente puede seleccionar la modalidad (presencial o virtual), fecha y hora propuesta.
- El sistema confirma el registro de la solicitud de reunión para posterior aprobación.

### HU-10

- El administrador puede agregar un nuevo proyecto mediante un formulario con todos sus datos.
- El administrador puede editar la información existente o eliminar proyectos obsoletos.

### HU-11

- El administrador puede ver el listado de clientes registrados con sus datos de contacto.
- Se permite actualizar o desactivar perfiles de clientes según sea necesario.

### HU-12

- El administrador puede acceder a una bandeja de entrada con los mensajes de los clientes.
- El administrador puede responder directamente a cada mensaje desde el panel.

### HU-13

- El administrador puede ver la lista de todos los usuarios registrados en el sistema.
- El administrador puede asignar, modificar o revocar roles y permisos de acceso.

## Trazabilidad

- HU-01 -> RF-01
- HU-02 -> RF-02
- HU-03 -> RF-04, RF-05
- HU-04 -> RF-07
- HU-05 -> RF-08
- HU-06 -> RF-09
- HU-07 -> RF-10
- HU-08 -> RF-11
- HU-09 -> RF-12
- HU-10 -> RF-14
- HU-11 -> RF-15
- HU-12 -> RF-19
- HU-13 -> RF-20

## Backlog ordenado

1. HU-01 (RF-01 - Debe tener)
2. HU-02 (RF-02 - Debe tener)
3. HU-03 (RF-04, RF-05 - Debe tener)
4. HU-10 (RF-14 - Debe tener)
5. HU-11 (RF-15 - Debe tener)
6. HU-13 (RF-20 - Debe tener)
7. HU-04 (RF-07 - Debería tener)
8. HU-05 (RF-08 - Debería tener)
9. HU-06 (RF-09 - Debería tener)
10. HU-08 (RF-11 - Debería tener)
11. HU-07 (RF-10 - Podría tener)
12. HU-09 (RF-12 - Podría tener)
13. HU-12 (RF-19 - Podría tener)

## Reflexión breve

Si una historia de usuario no se relaciona con ningún RF, significa que **falta documentar un requerimiento funcional** en la Guía 3 (si la historia aporta valor real) o que **la historia es innecesaria** y debe descartarse por no estar alineada con el alcance del proyecto.
