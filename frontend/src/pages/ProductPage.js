import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDetailsAsync } from '../redux/product/product.actions'

import { Link } from 'react-router-dom'
import { Col, Row, Button, Card, Image, ListGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductPage = ({ match }) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  const { loading, errorMessage, productDetails } = product
  useEffect(() => {
    dispatch(fetchProductDetailsAsync(match.params.id))
  }, [dispatch, match])
  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <Message variant="danger" />
      ) : (
        <Row>
          <Col sm={12} md={6} lg={5}>
            <Image src={productDetails.image} alt={productDetails.name} fluid />
          </Col>
          <Col sm={12} md={6} lg={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{productDetails.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={productDetails.rating}
                  numReviews={productDetails.numReviews}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${productDetails.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${productDetails.description}
              </ListGroup.Item>
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
                      <strong>${productDetails.price}</strong>
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
                        {productDetails.countInStock > 0
                          ? ' In Stock'
                          : ' Out Of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={productDetails.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  )
}

export default ProductPage
