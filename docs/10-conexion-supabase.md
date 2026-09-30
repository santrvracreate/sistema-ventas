# Conexión con Supabase (Guía 10)

## Fragmento de código final de iniciar()

```javascript
async function iniciar() {
  const { data, error } = await supabase.from("productos").select();
  if (error) {
    console.error("Error al leer productos:", error);
    return;
  }
  console.log("Productos encontrados:", data);
}
```

## Error al escribir mal el nombre de la tabla (Actividad C)
Si se cambia el nombre de la tabla a "productoss", `data` llega como `null` y `error` muestra un mensaje indicando que la relación (tabla) "productoss" no existe en la base de datos (`relation "public.productoss" does not exist`).

## Reto - Consulta a la tabla clientes
Al ejecutar `probarClientes()`, la tabla devuelve `[]` (un arreglo vacío con 0 filas), lo cual coincide con lo esperado ya que la tabla se creó con SQL en la Guía 9 pero aún no tiene datos insertados.

## Reflexión breve
- **supabase**: Es el cliente u objeto en JavaScript que representa la conexión con nuestro proyecto de Supabase.
- **.from("productos")**: Le indica a supabase-js sobre qué tabla específica queremos realizar la consulta (en este caso, `productos`).
- **.select()**: Solicita traer todas las columnas de la tabla indicada.
- **await**: Pausa la ejecución de la función asíncrona hasta que la base de datos responda (hasta que la promesa se resuelva) para poder continuar y usar el resultado.
