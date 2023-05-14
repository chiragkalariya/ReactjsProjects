import React, { Component, useState } from "react";
class Render extends Component {
    constructor() {
        super();
        this.state = {
            email : "chiragkalariya80@gmail.com"
        }
    }
    render() {
        console.log(this.state.email);
        return(
            <>
                <h2>User component</h2>
                <button onClick={() => this.setState({email:"rahul@gmail.com"})}>Update email</button>
            </>
        )
    }
}

export default Render;