import {Component} from "react";


export class Section2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            serverError: false,
            card: 0,
            toggle: false,
            input: ""
        }

    }

    render() {
        document.title = "Раздел 2"
        return (
            <div><b>Раздел 2</b></div>
        )
    }
}