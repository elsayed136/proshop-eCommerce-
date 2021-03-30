import express from 'express'
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'

const router = express.Router()

// GET /api/products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const porducts = await Product.find({})
    res.json(porducts)
  })
)

// GET /api/products/:id
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error('product not found')
    }
    res.json(product)
  })
)

export default router
