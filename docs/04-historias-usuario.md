# Guía 4 — Historias de usuario

## Historias de usuario

### Ferretería San Martín

- HU-01: Como vendedor, quiero registrar una venta con productos y cantidades, para no tener que anotarla a mano en el cuaderno.
- HU-02: Como vendedor, quiero consultar la existencia de un producto antes de venderlo, para no ofrecer algo que ya no hay en el estante.
- HU-03: Como administrador, quiero registrar productos nuevos con nombre, precio y existencia, para mantener actualizado el inventario.
- HU-04: Como administrador, quiero ver el total vendido en un periodo, para saber cómo va el negocio sin sumar a mano página por página.
- HU-05: Como administrador, quiero ver un resumen de ventas desde mi celular, para revisarlo aunque no esté en la ferretería.
- HU-06: Como vendedor, quiero ver una alerta cuando un producto tenga existencia baja, para avisar al administrador antes de que se agote.

### Mi caso propio (Portafolio de Servicios)

- HU-CP01: Como desarrollador (Santiago), quiero publicar mis proyectos terminados y servicios ofrecidos en un portafolio web, para que los clientes potenciales conozcan mi trabajo.
- HU-CP02: Como desarrollador (Santiago), quiero registrar y actualizar el estado de los proyectos en curso, para evitar retrasos y cumplir las fechas de entrega.

## Criterios de aceptación

### HU-01

- Se pueden elegir uno o más productos y sus cantidades.
- El sistema calcula el total a cobrar automáticamente.
- La venta queda guardada y se puede consultar después.
- La existencia de los productos vendidos se actualiza automáticamente.

### HU-02

- Se puede buscar un producto por su nombre.
- El sistema muestra la cantidad disponible del producto.
- Si no hay existencia, el sistema indica que el producto está agotado.

### HU-03

- Se puede ingresar el nombre, precio y existencia inicial del producto.
- El nombre del producto es obligatorio.
- El precio debe ser un número mayor que cero.
- Al guardar, el producto aparece en el inventario.

### HU-04

- Se puede seleccionar una fecha inicial y una fecha final.
- El sistema muestra las ventas realizadas en ese periodo.
- El sistema calcula automáticamente el total vendido.

### HU-05

- El administrador puede ingresar al sistema desde el navegador de un celular.
- El sistema muestra un resumen de las ventas registradas adaptado a la pantalla móvil.
- Solo un usuario autorizado puede consultar el resumen.

### HU-CP01 (Caso propio)

- El cliente puede ver una galería con imágenes y descripción de cada proyecto.
- Se muestra la lista completa de servicios (desarrollo, mantenimiento, asesoría).

## Trazabilidad

- HU-01 -> RF-01
- HU-02 -> RF-02
- HU-03 -> RF-03
- HU-04 -> RF-04
- HU-05 -> RF-05
- HU-06 -> RF-06
- HU-CP01 -> RF-01 (Caso propio)
- HU-CP02 -> RF-04 (Caso propio)

## Backlog ordenado

1. HU-01 (RF-01 - Debe tener)
2. HU-02 (RF-02 - Debe tener)
3. HU-03 (RF-03 - Debe tener)
4. HU-04 (RF-04 - Debe tener)
5. HU-05 (RF-05 - Debería tener)
6. HU-06 (RF-06 - Debería tener)

## Reflexión breve

Si una historia de usuario no se relaciona con ningún RF, significa que **falta documentar un requerimiento funcional** en la Guía 3 (si la historia aporta valor real) o que **la historia es innecesaria** y debe descartarse por no estar alineada con el alcance del proyecto.
