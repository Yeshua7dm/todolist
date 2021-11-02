const AddTodo = ({newTodo, changeHandler, clickHandler}) => {
    return (
        <div className="addTodo">
           <input className="new-todo" type="text" value={newTodo} onChange={changeHandler} name="" id="" placeholder="Enter a todo..." /> 
           <button onClick={clickHandler}>+</button>
        </div>
    )
}

export default AddTodo
