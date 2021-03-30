import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({
  product: { _id, image, name, rating, numReviews, price },
}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-2">
            <Rating rating={rating} numReviews={numReviews} />
          </div>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default Product
