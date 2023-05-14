import React, { Component } from "react";
class ComDidUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidUpdate( preProps, preState, snapShot ) {
        console.log("componentdidupdate", preState.count,this.state.count);
        if (preState.count === this.state.count) {
            alert("data is same")
        }
    }
    render() {
        // console.log("render");
        // console.log(this.state.name);
        return(
            <>
                <h2>componentdidUpdate{this.state.count}</h2>
                <button onClick={() => this.setState({count : 2}) }>update name</button>
            </>
        )
    }
}
export default ComDidUpdate;