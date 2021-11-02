const Todo = ({todo, checkHandler}) => {
    return (
        <div className="todo">
            <p>{todo.todo}</p>
            <input onChange={() => checkHandler(todo.id)} type="checkbox" checked={todo.status} />
        </div>
    )
}

export default Todo
