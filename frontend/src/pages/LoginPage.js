import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/common/Loader'
import Message from '../components/common/Message'
import FormContainer from '../components/common/FormContainer'

import { login } from '../store/user/user.actions'

const LoginPage = ({ history, location }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const user = useSelector(state => state.user)

  const { loading, errorMessage, userInfo } = user

  useEffect(() => {
    if (userInfo) history.push('/')
    return () => {}
  }, [history, userInfo])

  const handleSubmit = e => {
    e.preventDefault()
    // dispatch login

    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {errorMessage && <Message variant="danger">{errorMessage}</Message>}
      {loading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer? <Link to={'/register'}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
    // redirect ? `/register?redirect=${redirect}` :
  )
}

export default LoginPage
