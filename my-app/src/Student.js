import React, { Component } from "react";
class Student extends Component {
    componentWillUnmount() {
        console.log("componentwillunmount called");
    }
    render() {
        return(
            <>
                <h2>Student Component</h2>
            </>
        )
    }
}
export default Student;