// import "./Section2.css"
import {Link, useLocation} from "react-router-dom";


export function Section2() {
    /*    constructor(props) {
            super(props);
            this.state = {
                color: (typeof props.history !== 'undefined' && props.history.state.color) || null,
                text: (typeof props.history !== 'undefined' && props.history.state.text) || null
            }*/
    const location = useLocation()
    document.title = "Раздел 2"
    return (
        <div className="col">
            <header className="App-header">
                <Link to="/1" className="head" state={location.state}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 1</button>
                </Link>
                <Link to="/2" className="head" state={location.state}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 2</button>
                </Link>
                <Link to="/3" className="head" state={location.state}>
                    <button style={{height: "100%", width: "100%"}}>Раздел 3</button>
                </Link>
            </header>
            <div><b>Раздел 2</b></div>
        </div>
    )
}