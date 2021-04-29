import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Main = () => {
  return (
    <main>
      <h2>Flavours</h2>
      <div className="carousel-container">

      </div>
      <button className="add-flavour-button">
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </button>
    </main>
  )
}

export default Main;