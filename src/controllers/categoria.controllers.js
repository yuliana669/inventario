import getConnection from "../db/database.js";

const obtenerCategorias = async (req, res) => {
  try {
    const db = await getConnection();
    const categorias = await db.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ mensaje: "Error al obtener categorías", error });
  }
};

const crearCategoria = async (req, res) => {
  try {
    const { CategoriaNombre, Descripcion, Imagen } = req.body;

    if (!CategoriaNombre || !Descripcion || !Imagen) {
      return res.status(400).json({ mensaje: "Datos incompletos para crear categoría" });
    }

    const nuevaCategoria = { CategoriaNombre, Descripcion, Imagen };
    const db = await getConnection();
    const resultado = await db.query("INSERT INTO categorias SET ?", nuevaCategoria);

    res.status(201).json({ mensaje: "Categoría creada exitosamente", idInsertado: resultado.insertId });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    res.status(500).json({ mensaje: "Error al crear la categoría", error });
  }
};

const obtenerCategoriaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const categoria = await db.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", [id]);

    if (categoria.length === 0) {
      res.status(404).json({ mensaje: "Categoría no encontrada" });
    } else {
      res.json(categoria[0]);
    }
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(500).json({ mensaje: "Error al obtener la categoría", error });
  }
};

const eliminarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const resultado = await db.query("DELETE FROM categorias WHERE CategoriaID = ?", [id]);

    if (resultado.affectedRows > 0) {
      res.json({ mensaje: "Categoría eliminada correctamente", resultado });
    } else {
      res.status(404).json({ mensaje: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    res.status(500).json({ mensaje: "Error al eliminar la categoría", error });
  }
};

const actualizarCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const { CategoriaNombre, Descripcion, Imagen } = req.body;

    if (!CategoriaNombre || !Descripcion || !Imagen) {
      return res.status(400).json({ mensaje: "Datos incompletos para actualizar categoría" });
    }

    const datosActualizados = { CategoriaNombre, Descripcion, Imagen };
    const db = await getConnection();
    const resultado = await db.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [datosActualizados, id]);

    if (resultado.affectedRows > 0) {
      res.json({ mensaje: "Categoría actualizada correctamente", resultado });
    } else {
      res.status(404).json({ mensaje: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    res.status(500).json({ mensaje: "Error al actualizar la categoría", error });
  }
};

export const methodHTTP = {
  obtenerCategorias,
  crearCategoria,
  obtenerCategoriaPorId,
  eliminarCategoria,
  actualizarCategoria
};
