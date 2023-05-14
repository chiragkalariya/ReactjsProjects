import React, { Component, createRef } from 'react'

export default class UseRefinClass extends Component {
    constructor() {
        super();
        this.inputRef = createRef();

    }
    componentDidMount() {
        // console.log(this.inputRef.current.value = "1000");
    }
    getVal() {
        console.log(this.inputRef.current.value);
        {
            this.inputRef.current.value.length < 5 ?
                this.inputRef.current.style.color = "red" :
                this.inputRef.current.style.color = "green";
        }
        // if (this.inputRef.current.value.length < 5) {
        //     this.inputRef.current.style.color="red"
        // } else {
        //     this.inputRef.current.style.color="green"
        // }
    }
    render() {
        return (
            <>
                <h2>Ref in class Component</h2>
                <input type="text" ref={this.inputRef} />
                <button onClick={() => this.getVal()}>Check Ref</button>
            </>
        )
    }
}

