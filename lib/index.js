import { Component } from "react"
import timestampToString from "./processors/timestampToString.js"

export default class Timestamp extends Component {
    constructor(props) {

        super(props);


        this.parameters = props;
    }

    componentDidUpdate(prevProps) {

        this.parameters = this.props;

    }

    render() {

        return timestampToString(this.props);

    }
}