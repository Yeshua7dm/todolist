const AddTodo = ({newTodo, changeHandler, clickHandler}) => {
    return (
        <div className="addTodo">
           <input className="new-todo" type="text" value={newTodo} onChange={changeHandler} name="" id="" placeholder="Create a new todo..." /> 
           <button onClick={clickHandler}>+</button>
        </div>
    )
}

export default AddTodo
