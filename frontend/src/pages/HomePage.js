import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import Product from '../components/Product'
import Message from '../components/common/Message'
import Loader from '../components/common/Loader'

import { loadProducts } from '../store/product/product.actions'

const HomePage = () => {
  const dispatch = useDispatch()
  const { loading, errorMessage, products } = useSelector(
    state => state.productList
  )
  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  if (loading) return <Loader />
  if (errorMessage) return <Message variant="danger">{errorMessage}</Message>
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomePage
