import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

import { fetchProductListAsync } from '../redux/product/product.actions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const HomePage = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const { loading, errorMessage, productList } = product
  useEffect(() => {
    dispatch(fetchProductListAsync())
  }, [dispatch])
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <Message variant="danger">{errorMessage}</Message>
      ) : (
        <Row>
          {productList.map(product => (
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
