const Todo = ({todo, checkHandler}) => {
    return (
        <div>
            <p>{todo.todo}</p>
            <input onChange={() => checkHandler(todo.id)} type="checkbox" checked={todo.status} />
        </div>
    )
}

export default Todo
