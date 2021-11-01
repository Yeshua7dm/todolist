import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  // state using react hooks
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Nothing 1",
      status: true
    },
    {
      id: 2,
      todo: "Nothing 1",
      status: true
    },
    {
      id: 3,
      todo: "Nothing 1",
      status: false
    },
  ])
  const [newtodo, setNewtodo] = useState("")

  // methods for the App
  const addNew = () => {
    let count = Math.max.apply(Math, todos.map(function(todo) { return todo.id }))
    count = count > 0 ? count + 1 : 1
    setTodos([...todos, {id: count, todo: newtodo, status: false}])
    setNewtodo("")
  }

  const setStatus = (id) => {
    // this simply says if the todo is the selected one, change the status
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: !todo.status} : todo))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => todo.status === false))
  }
  // App Exporting JSX
  return (
    <div className="App">
      <h2>ToDo</h2>
      <div>
        <AddTodo clickHandler={addNew} newTodo={newtodo} changeHandler={(e) => setNewtodo(e.target.value)} />

        <div className="todos">
          {
            todos.map(todo => <Todo checkHandler={setStatus} key={todo.id} todo={todo} />)
          }

          <Footer clearDone={clearCompleted} length={(todos.filter(todo => todo.status === false)).length}  />
        </div>
        
      </div>
    </div>
  );
}

export default App;
