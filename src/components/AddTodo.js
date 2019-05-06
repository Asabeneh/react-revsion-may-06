import React from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
  return (
      <form onSubmit={props.handleSubmit}>
          <input
              type="text"
              name="todo"
              value={props.todo}
              placeholder="Task"
              onChange={props.handleChange}
          />
          <button>Add Todo</button>
      </form>
  )
}

AddTodo.propTypes = {

}

export default AddTodo
