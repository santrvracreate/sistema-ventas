let clientesCache = [];

async function llenarSelectClientes() {
  const select = document.querySelector("#campo-cliente");
  const { data, error } = await supabaseClient.from("clientes").select();
  
  if (error || !data) {
    console.error("Error al leer clientes:", error);
    return;
  }
  
  clientesCache = data;
  select.innerHTML = data.map((c) => `<option value="${c.id}">${c.nombre}</option>`).join("");
}

async function iniciar() {
  const cuerpoTabla = document.querySelector("#cuerpo-proyectos");
  
  // 1. Estado "Cargando"
  cuerpoTabla.innerHTML = '<tr><td colspan="3">Cargando proyectos...</td></tr>';

  // Consultamos la tabla 'proyectos'
  const { data, error } = await supabaseClient.from("proyectos").select();
  
  if (error) {
    console.error("Error al leer proyectos:", error);
    cuerpoTabla.innerHTML = '<tr><td colspan="3">No se pudo cargar el listado.</td></tr>';
    return;
  }
  
  // Llenamos el select de clientes
  await llenarSelectClientes();
  
  // 2. Estado "Vacío"
  if (data.length === 0) {
    cuerpoTabla.innerHTML = '<tr><td colspan="3">Todavía no hay proyectos registrados.</td></tr>';
    return;
  }
  
  // 3. Estado "Con datos"
  const filas = data.map((proyecto) => `
    <tr>
      <td>${proyecto.nombre}</td>
      <td>${proyecto.descripcion || 'Sin descripción'}</td>
      <td>${proyecto.estado}</td>
    </tr>
  `).join("");
  
  cuerpoTabla.innerHTML = filas;
}

document.querySelector("#form-proyecto").addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita que la página se recargue

  const idCliente = Number(document.querySelector("#campo-cliente").value);
  const nombre = document.querySelector("#campo-nombre").value;
  const descripcion = document.querySelector("#campo-descripcion").value;

  // Insertamos el nuevo proyecto en la base de datos
  const { data: proyecto, error: errorProyecto } = await supabaseClient
    .from("proyectos")
    .insert({ 
      id_cliente: idCliente, 
      nombre: nombre,
      descripcion: descripcion
    })
    .select()
    .single();

  if (errorProyecto) {
    console.error(errorProyecto);
    document.querySelector("#mensaje-proyecto").textContent = "Ocurrió un problema al registrar el proyecto.";
    return;
  }

  // Éxito
  document.querySelector("#mensaje-proyecto").textContent = "Proyecto registrado correctamente.";
  document.querySelector("#form-proyecto").reset();
  
  // Recargamos la tabla para ver el nuevo registro inmediatamente
  iniciar();
});

iniciar();
