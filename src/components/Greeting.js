import React from 'react'
import PropTypes from 'prop-types'

const Greeting = props => {
  return (

        <div>
            <h1>Welcome, {props.name}</h1>
        </div>
  )
}

Greeting.propTypes = {

}

export default Greeting
