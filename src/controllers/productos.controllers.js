import getConnection from "../db/database.js";

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { ProductoNombre, PrecioUnitario } = req.body;

    if (!ProductoNombre || !PrecioUnitario) {
      return res.status(400).json({ mensaje: "ProductoNombre y PrecioUnitario son obligatorios" });
    }

    const updatedProducto = { ProductoNombre, PrecioUnitario };
    const db = await getConnection();
    const result = await db.query("UPDATE productos SET ? WHERE ProductoID = ?", [updatedProducto, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json({ mensaje: "Producto actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ mensaje: "Error interno al actualizar producto", error });
  }
};

export const methodHTTP = {
  updateProducto
};
