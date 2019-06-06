import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ image, day, max, min, description}) => (
    <div className="wrapper-forecast flex">
        <div className="card-header">
            {image}
            <h2>{day}</h2>
        </div>
        <div className="card-body">
            <ul>
            <li>maximum temp: {max}</li>
          <li>minimum temp: {min}</li>
          <li>description: {description}</li>
            </ul>
        </div>
    </div>
)

Card.propTypes = {
    image: PropTypes.string,
    day: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    description: PropTypes.string
}