import mysql from "promise-mysql";
import config from "../config.js";

let dbConnection = null;

const connectDB = async () => {
  try {
    if (!dbConnection) {
      dbConnection = await mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password,
      });
      console.log("✅ Base de datos MySQL conectada exitosamente.");
    }
    return dbConnection;
  } catch (err) {
    console.error("❌ Fallo en la conexión a la base de datos:", err.message);
    throw err;
  }
};

export default connectDB;