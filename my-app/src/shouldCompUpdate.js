import React, { Component } from "react";
class ShoulCompUpdate extends Component {
    constructor() {
        super();
        this.state = {
            count : 1
        }
    }
    shouldComponentUpdate() {
        console.log("shouldcomponentupdate", this.state.count);
        if (this.state.count < 10) {
            return true;
        }
    }
    render() {
        return(
            <>
                <h1>shouldComponentUpdate {this.state.count}</h1>
                <button onClick={() => this.setState({count : this.state.count + 1})}>Update counter</button>
            </>
        )
    }
}
export default ShoulCompUpdate;