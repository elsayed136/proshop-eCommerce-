import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

import { fetchProductsAsync } from '../redux/product/product.actions'

const HomePage = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const { isFetching, errorMessage, products } = product
  useEffect(() => {
    dispatch(fetchProductsAsync())
  }, [])
  return (
    <>
      <h1>Latest Products</h1>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomePage
