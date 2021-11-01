import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
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
  return (
    <div className="App">
      <h2>ToDo</h2>
      <div>
        <AddTodo newTodo={newtodo} changeHandler={(e) => setNewtodo(e.target.value)} />

        <div className="todos">
          {
            todos.map(todo => <Todo key={todo.id} todo={todo} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
