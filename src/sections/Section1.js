import {useState} from "react";
import "./Sections.css"
import {Link, useLocation} from "react-router-dom";


export function Section1() {
    const location = useLocation()
    const [color, setColor] = useState(location.state !== null ? location.state.color : null)
    const [text, setText] = useState(location.state !== null ? location.state.text : null)
    document.title = "Раздел 1"
    return (
        <div className="col">
            <header className="App-header">
                <Link to="/1" className="head" style={{cursor: "default"}} state={{color: color, text: text}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 1</button>
                </Link>
                <Link to="/2" className="head" style={{cursor: "default"}} state={{color: color, text: text}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 2</button>
                </Link>
                <Link to="/3" className="head" style={{cursor: "default"}} state={{color: color, text: text}}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 3</button>
                </Link>
            </header>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Раздел 1</b></div>
            <div className="row" color="white">
                <button style={{
                    color: "white", backgroundColor: "red", flex: "1 1 auto", margin: "10px 20px",
                    minHeight: "inherit", width: "33.3%"
                }}
                        onClick={() => setColor("red")}
                >Красный
                </button>
                <button style={{
                    color: "white", backgroundColor: "green", flex: "1 1 auto", margin: "10px 20px",
                    minHeight: "inherit", width: "33.3%"
                }}
                        onClick={() => setColor("green")}
                >Зеленый
                </button>
                <button style={{
                    color: "white", backgroundColor: "blue", flex: "1 1 auto", margin: "10px 20px",
                    minHeight: "inherit", width: "33.3%"
                }}
                        onClick={() => setColor("blue")}
                >Синий
                </button>
            </div>
            <textarea style={{resize: "none", minHeight: "50vh", minWidth: "100%"}}
                      onChange={(event) => setText(event.target.value)}
                      defaultValue={location.state !== null ? location.state.text : null}
            ></textarea>
        </div>
    )
}