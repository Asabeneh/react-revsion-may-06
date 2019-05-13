import React from 'react'
import PropTypes from 'prop-types'

const CountryList = props => {
  return (
    <div>
          <h1>Total number of countries: {props.countries.length}</h1>
    </div>
  )
}

CountryList.propTypes = {

}

export default CountryList
