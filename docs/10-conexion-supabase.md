# Conexión con Supabase (Guía 10)

## Fragmento de código final de iniciar()

```javascript
async function iniciar() {
  const { data, error } = await supabase.from("clientes").select();
  if (error) {
    console.error("Error al leer clientes:", error);
    return;
  }
  console.log("Clientes encontrados:", data);
}
```

## Error al escribir mal el nombre de la tabla (Actividad C)

Si se cambia el nombre de la tabla a "clientess", `data` llega como `null` y `error` muestra un mensaje indicando que la relación (tabla) "clientess" no existe en la base de datos (`relation "public.clientess" does not exist`).

## Reto - Consulta a la tabla clientes

Al ejecutar `probarClientes()`, la tabla devuelve `[]` (un arreglo vacío con 0 filas), lo cual coincide con lo esperado ya que la tabla se creó con SQL en la Guía 9 pero aún no tiene datos insertados.

## Reflexión breve

- **supabase**: Es el cliente u objeto en JavaScript que representa la conexión con nuestro proyecto de Supabase.
- **.from("clientes")**: Le indica a supabase-js sobre qué tabla específica queremos realizar la consulta (en este caso, `clientes`).
- **.select()**: Solicita traer todas las columnas de la tabla indicada.
- **await**: Pausa la ejecución de la función asíncrona hasta que la base de datos responda (hasta que la promesa se resuelva) para poder continuar y usar el resultado.
