import getConnection from "../db/database.js";

const postCliente = async (req, res) => {
  try {
    const { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;

    if (!ClienteID || !Compania || !Contacto || !Titulo || !Direccion || !Ciudad || !Regiones || !CodigoPostal || !Pais || !Telefono || !Fax) {
      return res.status(400).json({ mensaje: "Datos incompletos para crear cliente" });
    }

    const nuevoCliente = { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax };
    const db = await getConnection();
    const resultado = await db.query("INSERT INTO clientes SET ?", nuevoCliente);

    res.status(201).json({ mensaje: "Cliente creado exitosamente", idInsertado: resultado.insertId });
  } catch (error) {
    console.error("Error al insertar cliente:", error);
    res.status(500).json({ mensaje: "No se pudo crear cliente", error });
  }
};

export const methodHTTP = {
  postCliente
};
