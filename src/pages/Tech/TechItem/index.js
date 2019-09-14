import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({ tech, onDelete }) {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.shape().isRequired,
  onDelete: PropTypes.func.isRequired,
};
