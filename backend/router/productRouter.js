import express from "express"
import { deleteProduct, getProduct, postProduct } from "../controller/productController.js";
const router = express();

router.get("/",getProduct).post("/",postProduct).delete("/:id",deleteProduct)


export default router