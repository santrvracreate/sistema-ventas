// Configuracion de Supabase (Guia 9)
// La anon key es publica por diseno: la protege Row Level Security, no el secreto.
// La service_role key NUNCA debe aparecer en este archivo.
const SUPABASE_URL = "https://tu-proyecto.supabase.co";
const SUPABASE_ANON_KEY = "tu-anon-key-aqui";

// Guia 10: Crear el cliente de Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
