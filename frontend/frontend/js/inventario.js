import { fetchCategories } from "./../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", () => {
  getCategories();
});

async function getCategories() {
  try {
    const categoriesList = await fetchCategories();
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = "";

    categoriesList.forEach((cat) => {
      const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = cat;

      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${CategoriaID}</td>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td><img src="${Imagen}" width="100px" class="img-fluid"></td>
        <td><button class="btn btn-info">Ver</button></td>
        <td><button class="btn btn-warning">Modificar</button></td>
        <td><button class="btn btn-danger">Eliminar</button></td>
      `;

      tableBody.appendChild(tableRow);
    });
  } catch (err) {
    console.error("Fallo al listar las categorías:", err.message);
  }
}
