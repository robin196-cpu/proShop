import express from "express";
import asyncHandler from "../middleware/asyncMiddleware.js";
import Product from "../models/productModel.js";
const router = express.Router();

// import products from "../data/products.js";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "product not found" });
  })
);

export default router;
