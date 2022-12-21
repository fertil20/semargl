import {Component} from "react";


export class Section3 extends Component {
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
        document.title = "Раздел 3"
        return (
            <div><b>Раздел 3</b></div>
        )
    }
}