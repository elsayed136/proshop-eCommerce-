import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { Col, Row, Button, Card, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/common/Loader'
import Message from '../components/common/Message'
import { getProductById } from '../store/product/product.actions'
import { addItem } from '../store/cart/cart.actions'

const ProductPage = ({ match }) => {
  const dispatch = useDispatch()
  const { loading, errorMessage, product } = useSelector(
    state => state.productDetails
  )
  useEffect(() => {
    dispatch(getProductById(match.params.id))
  }, [dispatch, match])

  if (loading) return <Loader />
  if (errorMessage) return <Message variant="danger">{errorMessage}</Message>

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col sm={12} md={6} lg={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12} md={12} lg={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Price:</strong>
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Stock:</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? ' In Stock' : ' Out Of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                  onClick={() => dispatch(addItem(product._id))}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
