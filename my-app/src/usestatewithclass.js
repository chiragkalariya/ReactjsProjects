import React,{Component} from "react";
class UsestateClass extends Component {
    constructor() {
        super();
        this.state = {
            userName: 1
        }
    }
    apple() {
        this.setState({userName: this.state.userName + 1})
    }
    render() {
        return(
            <>
                <h1>Use State with class Component</h1>
                <p>{this.state.userName}</p>
                <button onClick={() => this.apple()}>Click me</button>
            </>
        )
    }
}
export default UsestateClass;