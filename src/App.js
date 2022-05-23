import * as React from 'react';
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"


function App() {
  const [todoList, setTodoList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  React.useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
      }
    })
      .then(result => result.json())
      .then(result => {
        setTodoList(result.records);
        setIsLoading(false);
      })
  }, []);

  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const removeTodo = (id) => {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deletedTodoList);
  }

  return (
    <>
      <h1>To do List for CTD</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>) :
        (
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        )}
    </>
  );
}

export default App;