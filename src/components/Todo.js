import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({index, todo, handleDelete}) => {
    return <li>{todo} <button onClick={() =>handleDelete(index)}>Delete</button></li>
}

Todo.propTypes = {

}

export default Todo
