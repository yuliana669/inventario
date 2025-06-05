import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
  try {
    const db = await getConnection();
    const empleados = await db.query("SELECT * FROM empleados");
    res.json(empleados);
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    res.status(500).json({ mensaje: "No se pudo obtener empleados", error });
  }
};

export const methodHTTP = {
  getEmpleados
};
