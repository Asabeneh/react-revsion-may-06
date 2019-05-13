import React from 'react'
import PropTypes from 'prop-types'

const Count = ({count, handleAdd, handleMinus}) => {
  return (
    <div>
          <h1>Count:{count}</h1>
          <button onClick={handleAdd}>Add One</button>
          <button onClick={handleMinus}>Minus One</button>
    </div>
  )
}

Count.propTypes = {

}

export default Count
