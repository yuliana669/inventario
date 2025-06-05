const API_URL = "http://localhost:3306/api/categorias";

export const fetchCategories = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Fallo en la solicitud: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Hubo un problema al cargar las categorías:", err.message);
    return [];
  }
};


