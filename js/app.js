// js/app.js

async function iniciar() {
  const { data, error } = await supabase.from("productos").select();
  if (error) {
    console.error("Error al leer productos:", error);
    return;
  }
  console.log("Productos encontrados:", data);
}

// Reto 3.5 - consulta la tabla clientes
async function probarClientes() {
  const { data, error } = await supabase.from("clientes").select();
  if (error) {
    console.error("Error al leer clientes:", error);
    return;
  }
  console.log("Clientes encontrados:", data);
}

iniciar();
probarClientes();
