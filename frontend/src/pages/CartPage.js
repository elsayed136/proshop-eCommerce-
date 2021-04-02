import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Message from '../components/Message'

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../store/cart/cart.actions'
// ReactToastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CartPage = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state => state.cart)

  const getTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const getTotalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)

  const handleChekout = () => {
    console.log('handleChekout')
  }
  return (
    <Row>
      <Col md={12} lg={8} className="my-3">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup>
            {cartItems.map(item => (
              <ListGroup.Item key={item._id}>
                <Row className="align-items-center text-center">
                  <Col md={3}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`} className="text-clamp">
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>
                    <h5>${item.price}</h5>
                  </Col>
                  <Col
                    md={3}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Button
                      size="sm"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <h2 className="mx-2">{item.quantity}</h2>
                    <Button
                      size="sm"
                      onClick={() => dispatch(addItem(item._id))}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </Button>
                  </Col>
                  <Col md={1} className="p-0">
                    <Button
                      className="btn-block "
                      variant="light"
                      onClick={() => dispatch(clearItemFromCart(item))}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={12} lg={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Subtotal ({getTotalCount}) items</h2>${getTotalPrice}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={handleChekout}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
      <ToastContainer autoClose={2000} />
    </Row>
  )
}

export default CartPage
