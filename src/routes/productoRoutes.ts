import { Router } from "express";
import ProductoController from "../controllers/ProductoController";
import { upload } from "../conf/multer";

const router = Router();

router.post("/", upload.single("imagen"), ProductoController.crear);
router.get("/", ProductoController.listar);
router.put("/:idProducto", upload.single("imagen"), ProductoController.actualizar);
router.delete("/:idProducto", ProductoController.eliminar);


export default router;