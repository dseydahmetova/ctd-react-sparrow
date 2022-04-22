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

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || [])

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];

}


function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
      <h1>To do List for CTD</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;