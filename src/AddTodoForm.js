import React from "react";
import InputWithLabel from "./InputWithLabel"
import styles from './TodoListItem.module.css';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState('');
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    };
    return (
        <form onSubmit={handleAddTodo} className = {styles.styledInput}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange}> Title </InputWithLabel>
            <button>Add</button>
        </form>
    );
}


export default AddTodoForm;