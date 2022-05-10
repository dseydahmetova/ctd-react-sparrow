import * as React from 'react';
import TodoList from "./TodoList"
import AddTodoForm from "./AddTodoForm"


/*function Search(){
  const handleChange = (event) => {
    console.log(event);
  }
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type = "text" onChange={handleChange} />
    </div>
  )
  }*/

function App() {

  const [todoList, setTodoList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    new Promise((resolve, reject) =>
      setTimeout(
        () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [] } }), 2000))
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false)
      });
  }, []);

  React.useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

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