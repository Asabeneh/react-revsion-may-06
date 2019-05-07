import React from 'react'
import PropTypes from 'prop-types'

const TextareaField = ({name, cols, rows,value, onChange}) => {
  return (
    <div>
      <textarea
      name= {name}
      cols={cols}
      row={rows}
      value = {value}
      onChange =  {onChange}
      />
    </div>
  )
}

TextareaField.defaultProps = {
    cols:50,
    rows:10
}

TextareaField.propTypes = {

}

export default TextareaField
