import React, { Component } from "react";
import Student from "./Student";
class CompWillUnMount extends Component {
    constructor() {
        super();
        this.state = {
            show : true
        }
    }

    render() {
        console.log(this.state.show);
        return(
            <>
                {
                    this.state.show ? <Student /> : <p>Child component remove</p>
                }
                <button onClick={() => this.setState({show : !this.state.show})}>Toggle child component</button>

            </>
        )
    }
}
export default CompWillUnMount;