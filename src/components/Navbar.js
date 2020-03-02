import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = props => {
  const names = ['John', 'David', 'Brook', 'Asab']
  const index = Math.floor(Math.random() * names.length)
  const name = names[index].toLowerCase()
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/' exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>ABOUT</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
        </li>
        <li>
          <NavLink to='/topics'>TOPICS</NavLink>
        </li>
        <li>
          <NavLink to='/add-user'>Add User</NavLink>
        </li>
        <li>
          <NavLink to='/add-todo'>Add Todo</NavLink>
        </li>
        <li>
          <NavLink to='/todos'>Todo List</NavLink>
        </li>
        <li>
          <NavLink to='/countries'>Countries</NavLink>
        </li>
        <li>
          <NavLink to='/count'>Count</NavLink>
        </li>
        <li>
          <NavLink to={`/user/${name}`}>User {names[index]}</NavLink>
        </li>
      </ul>
      <hr />
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
