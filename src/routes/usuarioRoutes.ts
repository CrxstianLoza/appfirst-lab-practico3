import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const router = Router();

router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;