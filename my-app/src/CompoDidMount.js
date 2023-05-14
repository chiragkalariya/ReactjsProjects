import React, { Component } from "react";
class ComDidMount extends Component {
    constructor() {
        super();
        console.log("constructor");
        this.state = {
            name: "chirag"
        }
    }
    componentDidMount() {
        console.log("componentdidmount");
    }
    render() {
        console.log("render");
        console.log(this.state.name);
        return(
            <>
                <h1>Hello World {this.state.name}</h1>
                <button onClick={() => this.setState({name: "Rahul"})}>Update render</button>
            </>
        )
    }
}

export default ComDidMount;