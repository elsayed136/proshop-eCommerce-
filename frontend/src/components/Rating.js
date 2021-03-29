import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as fabStar } from '@fortawesome/free-regular-svg-icons'

const STARS = [1, 2, 3, 4, 5]
const Rating = ({ rating, numReviews, color }) => {
  return (
    <div>
      {STARS.map(value => (
        <span key={value}>
          <FontAwesomeIcon
            style={{ color }}
            icon={
              rating >= value
                ? faStar
                : rating >= value - 1 + 0.5
                ? faStarHalfAlt
                : fabStar
            }
          />
        </span>
      ))}
      {numReviews && <span className="mx-2">{numReviews} reviews</span>}
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
  rating: 0,
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  numReviews: PropTypes.number,
  color: PropTypes.string,
}

export default Rating
