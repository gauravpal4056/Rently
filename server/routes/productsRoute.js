import express from "express";
import { createProduct, getAllProducts, updateProduct, getProduct, deleteProduct } from "../controller/productController.js";

const router = express.Router();

router.get('/product', getAllProducts)
router.get('/product/:id', getProduct)
router.post('/product/new', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)



export default router