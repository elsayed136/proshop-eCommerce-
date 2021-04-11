import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// GET /api/products
// Fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const porducts = await Product.find({})
  res.json(porducts)
})

// GET /api/products/:id
// Fetch single product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404)
    throw new Error('product not found')
  }
  res.json(product)
})

export { getProducts, getProductById }
