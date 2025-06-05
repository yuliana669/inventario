import express from "express";
import cors from "cors";

import categoriaRoutes from "./routes/categorias.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

app.set("port", 5000);

app.use(express.json());

app.use(cors());

app.use("/api/categorias", categoriaRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/productos", productosRoutes);

export default app;
