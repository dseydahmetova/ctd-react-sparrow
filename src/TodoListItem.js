import React from "react";
import styles from './TodoListItem.module.css';

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <>
      <li className = {styles.ListItem}>
        {todo.fields.Title}
        &nbsp;
        <button onClick={() => onRemoveTodo(todo.id)} className = {styles.styledButton}>Remove</button>
      </li>
    </>
  );
}

export default TodoListItem