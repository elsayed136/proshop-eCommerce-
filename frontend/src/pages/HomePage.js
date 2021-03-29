import React from 'react'
import useFetch from '../effects/useFetch'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

const HomePage = () => {
  const products = useFetch('/api/products') || []
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
