import React, { Component } from "react";
class Employes extends Component {
    // constructor() {
    //     super();

    // }
    render() {
        console.log(this.props);    
        return(
            <>
                <h2>props with class component</h2>
                <h4>{this.props.name}</h4>
                <h4>{this.props.age}</h4>
            </>
        )
    }
}
export default Employes;