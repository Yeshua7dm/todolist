const AddTodo = ({newTodo, changeHandler, clickHandler}) => {
    return (
        <div>
           <input type="text" value={newTodo} onChange={changeHandler} name="" id="" /> 
           <button onClick={clickHandler}>+</button>
        </div>
    )
}

export default AddTodo
