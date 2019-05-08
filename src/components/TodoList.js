import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = props => {
  const todoList = props.todos.map((todo, i) => {
    return <Todo 
    key={'key'+ i}
    todo = {todo}
    handleDelete = {props.handleDelete}
    index = {i}
    />;
  });
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
