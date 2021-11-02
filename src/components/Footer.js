const Footer = ({clearDone, length}) => {
    return (
        <div className="footer">
            <p>{length > 0 ? length : 0} item{length > 1 ? 's' : '' } left</p>
            {/* <div> */}
                <p>All Todos</p>
                <p>Completed Todos</p>
                <p>Unfinished Todos</p>
            {/* </div>             */}
            <p className="clear-complete" onClick={clearDone}>X Clear Completed</p>
        </div>
    )
}

export default Footer
