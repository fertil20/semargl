export function Menu1({location}) {
    return (
        <div>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Подменю 1</b></div>
            <div className="row">
                <div style={{marginRight: "30px"}}>
                    {location !== null ? location.selFilter : null}
                </div>
                <div style={{marginLeft: "30px"}}>
                    {location !== null && location.todos?.length > 0 ? (
                        <ul style={{padding: 0}} className="todo-list">
                            {location.todos.map((todo, index) => (
                                <div className="todo">
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                        <input id={index} type="checkbox" style={{marginRight: "10px"}}/>
                                        <label for="checkbox" key={index}>{todo}</label>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty">
                            <p>No task found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}