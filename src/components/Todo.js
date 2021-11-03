const Todo = ({todo, checkHandler}) => {
    return (
        <div className="todo">
            <p className={todo.status ? "checked" : ""}>{todo.todo}</p>
            <input onChange={() => checkHandler(todo.id)} type="checkbox" checked={todo.status} />            
        </div>
    )
}

export default Todo
