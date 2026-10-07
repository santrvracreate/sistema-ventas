# Guía 5 — Casos de uso

## CU-01: Consultar portafolio

- **Historia relacionada:** HU-01
- **Actor principal:** Visitante
- **Precondición:** El sitio web de NOCTUA está disponible y cuenta con proyectos públicos registrados.

### Flujo principal

1. El visitante ingresa al sitio web de NOCTUA.
2. El visitante selecciona la opción "Portafolio".
3. El sistema muestra la lista de proyectos públicos disponibles.
4. El visitante selecciona un proyecto específico.
5. El sistema muestra la información pública del proyecto.

### Flujos alternativos

- **4a.** Si el visitante intenta acceder a información o funciones privadas dentro del proyecto, el sistema solicita iniciar sesión o registrarse.

### Postcondición

El visitante visualiza la información pública del portafolio.

---

## CU-02: Registrarse como cliente

- **Historia relacionada:** HU-03
- **Actor principal:** Visitante
- **Precondición:** El visitante no se ha autenticado en la plataforma.

### Flujo principal

1. El visitante selecciona una función privada o la opción de registro.
2. El sistema muestra el formulario de registro y solicita sus datos.
3. El visitante ingresa sus datos (nombre, correo y contraseña).
4. El sistema valida la información ingresada.
5. El sistema crea la cuenta de usuario.
6. El usuario obtiene acceso a la plataforma con el rol de cliente.

### Flujos alternativos

- **4a.** Si los datos ingresados son inválidos o el correo ya está registrado, el sistema muestra un mensaje de error y solicita corregir la información.

### Postcondición

La cuenta de cliente queda creada y activa en el sistema.

---

## CU-03: Consultar proyecto detallado

- **Historia relacionada:** HU-04
- **Actor principal:** Cliente
- **Precondición:** El cliente ha iniciado sesión correctamente en el sistema.

### Flujo principal

1. El cliente inicia sesión en la plataforma.
2. El cliente ingresa a la sección "Portafolio".
3. El cliente selecciona un proyecto de la lista.
4. El sistema muestra la información detallada del proyecto (características, tecnologías e imágenes).

### Flujos alternativos

- **3a.** Si el proyecto no contiene información adicional cargada, el sistema muestra únicamente la ficha técnica básica disponible.

### Postcondición

El cliente visualiza el detalle técnico e información completa del proyecto.

---

## CU-04: Consultar mis proyectos

- **Historia relacionada:** HU-05, HU-06
- **Actor principal:** Cliente
- **Precondición:** El cliente tiene proyectos contratados y asignados a su cuenta.

### Flujo principal

1. El cliente inicia sesión en la plataforma.
2. El cliente accede a la sección "Mis proyectos".
3. El sistema muestra la lista de sus proyectos contratados.
4. El cliente selecciona un proyecto.
5. El sistema muestra los detalles, el estado actual y el porcentaje de avance del proyecto.

### Flujos alternativos

- **3a.** Si el cliente no tiene proyectos contratados registrados, el sistema muestra un mensaje indicando que no cuenta con proyectos activos.

### Postcondición

El cliente consulta la información y el estado de avance de sus proyectos.

---

## CU-05: Enviar mensaje

- **Historia relacionada:** HU-07
- **Actor principal:** Cliente
- **Precondición:** El cliente está autenticado en la plataforma.

### Flujo principal

1. El cliente inicia sesión en la plataforma.
2. El cliente accede a la sección "Mensajes".
3. El cliente selecciona un proyecto asignado o inicia una nueva conversación.
4. El cliente escribe el contenido del mensaje.
5. El cliente envía el mensaje.
6. El sistema registra el mensaje y notifica al administrador.

### Flujos alternativos

- **5a.** Si el mensaje está vacío, el sistema no permite el envío y solicita ingresar texto.

### Postcondición

El mensaje queda registrado en el historial de comunicación del proyecto.

---

## CU-06: Solicitar cotización

- **Historia relacionada:** HU-08
- **Actor principal:** Cliente
- **Precondición:** El cliente está autenticado en el sistema.

### Flujo principal

1. El cliente selecciona la opción "Solicitar cotización".
2. El cliente selecciona el servicio de su interés.
3. El cliente describe su necesidad o requerimiento en el formulario.
4. El cliente envía la solicitud.
5. El sistema registra la solicitud de cotización.
6. El administrador queda habilitado para revisarla y responderla.

### Flujos alternativos

- **4a.** Si no se completan los campos obligatorios, el sistema alerta al usuario para que llene los datos requeridos antes de enviar.

### Postcondición

La solicitud de cotización queda guardada en el sistema para revisión del administrador.

---

## CU-07: Solicitar reunión

- **Historia relacionada:** HU-09
- **Actor principal:** Cliente
- **Precondición:** El cliente está autenticado en el sistema.

### Flujo principal

1. El cliente selecciona la opción "Solicitar reunión".
2. El cliente indica la modalidad preferida (presencial o virtual).
3. El cliente selecciona la fecha y hora disponible.
4. El cliente envía la solicitud.
5. El sistema registra la cita pendiente de confirmación.

### Flujos alternativos

- **3a.** Si la fecha y hora seleccionadas no están disponibles, el sistema solicita elegir un horario distinto.

### Postcondición

La solicitud de reunión queda agendada en estado pendiente.

---

## CU-08: Gestionar proyectos

- **Historia relacionada:** HU-10
- **Actor principal:** Administrador (Santiago)
- **Precondición:** El administrador ha iniciado sesión con credenciales administrativas.

### Flujo principal

1. El administrador inicia sesión en el sistema.
2. El administrador accede al panel administrativo.
3. El administrador selecciona la sección "Proyectos".
4. El administrador crea, modifica o elimina un proyecto según sea requerido.
5. El administrador guarda los cambios realizados.
6. El sistema actualiza la base de datos y la información en el portafolio público o privado.

### Flujos alternativos

- **5a.** Si el administrador cancela la operación antes de guardar, no se aplica ningún cambio.

### Postcondición

El portafolio y la base de datos de proyectos quedan actualizados.

---

## CU-09: Gestionar clientes

- **Historia relacionada:** HU-11
- **Actor principal:** Administrador (Santiago)
- **Precondición:** Existen usuarios registrados como clientes en el sistema.

### Flujo principal

1. El administrador inicia sesión y accede al panel administrativo.
2. El administrador selecciona la opción "Clientes".
3. El sistema muestra la lista de clientes registrados.
4. El administrador selecciona un cliente para consultar, modificar sus datos, activarlo o desactivarlo.
5. El administrador guarda los cambios.
6. El sistema actualiza el estado y la información del cliente.

### Flujos alternativos

- **4a.** Si se intenta desactivar un cliente con proyectos activos en desarrollo, el sistema solicita confirmación adicional antes de proceder.

### Postcondición

La información y los estados de los clientes quedan actualizados.

---

## CU-10: Gestionar mensajes

- **Historia relacionada:** HU-12
- **Actor principal:** Administrador (Santiago)
- **Precondición:** Existen mensajes enviados por clientes en el sistema.

### Flujo principal

1. El administrador inicia sesión y accede al panel administrativo.
2. El administrador selecciona la sección "Mensajes".
3. El sistema muestra la bandeja de entrada con los mensajes de los clientes.
4. El administrador selecciona un mensaje y escribe su respuesta.
5. El administrador envía la respuesta.
6. El sistema registra la respuesta y la hace visible para el cliente correspondiente.

### Flujos alternativos

- **3a.** Si no hay mensajes pendientes, el sistema muestra la bandeja de entrada vacía.

### Postcondición

El mensaje es respondido y la conversación queda actualizada.
