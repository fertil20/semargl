import {Component} from "react";
import "./Section1.css"
import {Link} from "react-router-dom";


export class Section1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: (typeof this.state !== 'undefined' && this.state.data.color) || null,
            text: (typeof this.state !== 'undefined' && this.state.data.text) || null
        }

    }

    render() {
        document.title = "Раздел 1"
        return (
            <div className="col">
                <header className="App-header">
                    <Link to="/1" className="head" state={{color: this.state.color, text: this.state.text}}>
                        <button style={{height: "100%", width: "100%"}}>Раздел 1</button></Link>
                    <Link to="/2" className="head" state={{color: this.state.color, text: this.state.text}}>
                        <button style={{height: "100%", width: "100%"}}>Раздел 2</button></Link>
                    <Link to="/3" className="head" state={{color: this.state.color, text: this.state.text}}>
                        <button style={{height: "100%", width: "100%"}}>Раздел 3</button></Link>
                </header>
                <div><b>Раздел 1</b></div>
                <div className="row">
                    <button style={{color: "white", backgroundColor: "red", flex: "1 1 auto", margin: "10px 20px",
                        minHeight: "inherit", width: "33.3%"}}
                            onClick={() => this.setState({color: "red"})}
                    >Красный</button>
                    <button style={{color: "white", backgroundColor: "green", flex: "1 1 auto", margin: "10px 20px",
                        minHeight: "inherit", width: "33.3%"}}
                            onClick={() => this.setState({color: "green"})}
                    >Зеленый</button>
                    <button style={{color: "white", backgroundColor: "blue", flex: "1 1 auto", margin: "10px 20px",
                        minHeight: "inherit", width: "33.3%"}}
                            onClick={() => this.setState({color: "blue"})}
                    >Синий</button>
                </div>
                <textarea style={{resize: "none", minHeight: "50vh", minWidth: "100%"}}
                          onChange={(event) => this.setState({text: event.target.value})}></textarea>
            </div>
        )
    }
}