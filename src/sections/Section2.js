import {Link, useLocation} from "react-router-dom";
import "./Sections.css"
import {useState} from "react";
import ToDoInput from "../components/ToDoInput";
import ToDoList from "../components/ToDoList";
import ToDoEdit from "../components/ToDoEdit";


export function Section2() {
    const location = useLocation()
    document.title = "Раздел 2"
    let data = [{
        id: 1,
        sum: "I'm here",
        sel: "Dog"
    }, {
        id: 2,
        sum: "Baby John",
        sel: "Cow"
    }, {
        id: 3,
        sum: "Hello there",
        sel: "Cat"
    }, {
        id: 4,
        sum: "Super Hot",
        sel: "Cat"
    }, {
        id: 5,
        sum: "Be careful",
        sel: "Cow"
    }, {
        id: 6,
        sum: "Usual test",
        sel: "Dog"
    }]
    if (location.state === null) {
    }
    const [sumFilter, setSumFilter] = useState((typeof location.state !== "undefined") && (location.state !== null) &&
    (typeof location.state.sumFilter !== "undefined") ? location.state.sumFilter : "")
    const [selFilter, setSelFilter] = useState((typeof location.state !== "undefined") && (location.state !== null) &&
    (typeof location.state.selFilter !== "undefined") ? location.state.selFilter : "")
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState((typeof location.state !== "undefined") && (location.state !== null) &&
    (typeof location.state.todos !== "undefined") ? location.state.todos : [])
    const [modalShow, setModalShow] = useState(false)
    const [id, setId] = useState()
    const addTodo = () => {
        if (todo !== "") {
            setTodos([...todos, todo]);
            setTodo("");
        }
    }
    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text;
        });
        setTodos(newTodos);
    }
    const editTodo = (text) => {
        setTodos(todos.splice(id, 1, text))
        setTodos(todos)
    }

    function dragNdrop(event) {
        let fileName = URL.createObjectURL(event.target.files[0]);
        let preview = document.getElementById("preview");
        let previewImg = document.createElement("img");
        previewImg.setAttribute("src", fileName);
        preview.innerHTML = "";
        preview.appendChild(previewImg);
    }
    function drag() {
        document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
    }
    function drop() {
        document.getElementById('uploadFile').parentNode.className = 'dragBox';
    }
    const [fileProp, setFileProp] = useState()
    const [size, setSize] = useState()
    const [D, setD] = useState()


    return (
        <div className="col">
            <header className="App-header">
                <Link to="/1" className="head" style={{cursor: "default"}} state={{...location.state, selFilter: selFilter,
                    todos: todos, data: data, sumFilter: sumFilter}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 1</button>
                </Link>
                <Link to="/2" className="head" style={{cursor: "default"}} state={{...location.state, selFilter: selFilter,
                    todos: todos, data: data, sumFilter: sumFilter}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 2</button>
                </Link>
                <Link to="/3" className="head" style={{cursor: "default"}} state={{...location.state, selFilter: selFilter,
                    todos: todos, data: data, sumFilter: sumFilter}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 3</button>
                </Link>
            </header>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Раздел 2</b></div>
            <div className="row" style={{marginBottom: "3vh"}}>
                <div className="head">Блок 1</div>
                <div className="head">Блок 2</div>
                <div className="head">Блок 3</div>
            </div>
            <div className="row" style={{minHeight: "3vh", margin: 0, alignItems: "start", justifyContent: "center"}}>
                <div className="col" style={{width: "33.3%", display: "flex", flexDirection: "column"}}>
                    <select defaultValue="" onChange={(event) => setSelFilter(event.target.value)}>
                        <option></option>
                        <option>{data[0].sel}</option>
                        <option>{data[1].sel}</option>
                        <option>{data[2].sel}</option>
                    </select>
                    <textarea
                        style={{resize: "none", padding: 0, maxWidth: "100%", marginBottom: "5px", marginTop: "5px"}}
                        onChange={(event) => setSumFilter(event.target.value)}
                    ></textarea>
                    <table style={{width: "100%"}}>
                        <tbody>
                        {data.map(
                            tr =>
                                ((tr.sel.toUpperCase().indexOf(selFilter.toUpperCase()) !== -1)
                                    && (tr.sum.toUpperCase().indexOf(sumFilter.toUpperCase()) !== -1)) &&
                                <tr>
                                    <td>{tr.id}</td>
                                    <td>{tr.sel}</td>
                                    <td>{tr.sum}</td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="col" style={{width: "33.3%", display: "flex", flexDirection: "column"}}>
                    <ToDoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
                    <ToDoList list={todos} remove={deleteTodo} edit={editTodo} setShowModal={setModalShow}
                              setId={setId}/>
                    <ToDoEdit edit={editTodo} setShowModal={setModalShow} showModal={modalShow}/>
                </div>
                <div className="col" style={{width: "33.3%", display: "flex", flexDirection: "column"}}>
                    <div className="uploadOuter">
                        <span className="dragBox">Drag and Drop image here
                            <input type="file" onChange={(event) => {dragNdrop(event)
                                setFileProp(event.target.files[0])
                            if ((event.target.files[0].size / (1024*1024)) > 1) {setSize("МБ")
                            setD(2)}
                            else if ((event.target.files[0].size / (1024)) > 1) {setSize("КБ")
                            setD(1)}
                            else {setSize("Б")
                            setD(1/1024)}}}
                                   onDragOver={() => (drag())} onDrop={() => (drop())} id="uploadFile"/>
                        </span>
                        <label style={{margin: "5px"}}>{typeof fileProp !== "undefined" ? fileProp.type : null}</label>
                        <label>{typeof fileProp !== "undefined" ? fileProp.size/(1024 * D) : null}{size}</label>
                        <div id="preview"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}