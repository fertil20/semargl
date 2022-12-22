import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {Menu1} from "../components/Menu1";
import {Menu2} from "../components/Menu2";
import {Menu3} from "../components/Menu3";


export function Section3() {
    const location = useLocation()
    document.title = "Раздел 3"
    const [menu, setMenu] = useState(1)
    return (
        <div className="col">
            <header className="App-header">
                <Link to="/1" className="head" style={{cursor: "default"}} state={((typeof location.state !== "undefined") &&
                (location.state !== null) ? location.state : null)}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 1</button>
                </Link>
                <Link to="/2" className="head" style={{cursor: "default"}} state={((typeof location.state !== "undefined") &&
                (location.state !== null) ? location.state : null)}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 2</button>
                </Link>
                <Link to="/3" className="head" style={{cursor: "default"}} state={((typeof location.state !== "undefined") &&
                (location.state !== null) ? location.state : null)}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 3</button>
                </Link>
            </header>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Раздел 3</b></div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div className="col" style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "left", textAlign: "center", width: "10%"
                }}>
                    <button style={{backgroundColor: ((typeof location.state !== "undefined") &&
                        (location.state !== null) ? location.state.color : null), marginBottom: "10px"}} onClick={() => setMenu(1)}
                    >Подменю 1</button>
                    <button style={{backgroundColor: ((typeof location.state !== "undefined") &&
                        (location.state !== null) ? location.state.color : null), marginBottom: "10px"}} onClick={() => setMenu(2)}
                    >Подменю 2</button>
                    <button style={{backgroundColor: ((typeof location.state !== "undefined") &&
                        (location.state !== null) ? location.state.color : null), marginBottom: "10px"}} onClick={() => setMenu(3)}
                    >Подменю 3</button>
                </div>
                <div className="col" style={{
                    display: "flex", flexDirection: "column", alignContent: "flex-end",
                    justifyContent: "center", textAlign: "center", width: "90%", marginRight: "9%"
                }}>
                    {menu === 1 && <Menu1 location={location.state}/>}
                    {menu === 2 && <Menu2 location={location.state}/>}
                    {menu === 3 && <Menu3 location={location.state}/>}
                </div>
            </div>
        </div>
    )
}