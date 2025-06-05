import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.obtenerCategorias);
router.post("/", categoriaController.crearCategoria);
router.get("/:id", categoriaController.obtenerCategoriaPorId);
router.put("/:id", categoriaController.actualizarCategoria);
router.delete("/:id", categoriaController.eliminarCategoria);
export default router;
