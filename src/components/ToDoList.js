const ToDoList = ({list, remove, setShowModal, setId, index}) => {
    return (
        <div>
            {list?.length > 0 ? (
                <ul style={{padding: 0}} className="todo-list">
                    {list.map((todo, index) => (
                        <div className="todo">
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <input id={index} type="checkbox" style={{marginRight: "10px"}}/>
                                <label for="checkbox" key={index}>{todo}</label>
                                {/*todo Починить стейты чекбоксов для передачи их состояния в другие окна*/}
                            </div>
                            <button
                                style={{marginRight: "5px"}}
                                className="delete-button"
                                onClick={() => {
                                    remove(todo);
                                }}
                            >
                                Delete
                            </button>
                            <button accessKey={index}
                                style={{marginLeft: "5px"}}
                                className="edit-button"
                                onClick={(e) => {setShowModal(true)
                                setId(e.target.accessKey)}}
                            >
                                Edit
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </div>
    )
}

export default ToDoList;