const Footer = ({clearDone, length}) => {
    return (
        <div>
            <p>{length > 0 ? length : 0} item{length > 1 ? 's' : '' } left</p>
            <p>All Todos</p>
            <p>Completed Todos</p>
            <p>Unfinished Todos</p>
            <p onClick={clearDone}>X Clear Completed</p>
        </div>
    )
}

export default Footer
