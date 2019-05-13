import React from 'react'
import PropTypes from 'prop-types'

const Users = props => {
  return (
    <div>
          <h1>{props.users.length}</h1>
    </div>
  )
}

Users.propTypes = {

}

export default Users
