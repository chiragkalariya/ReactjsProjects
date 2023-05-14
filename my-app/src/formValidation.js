import React, { useState } from "react"
function FormValid() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setuserErr] = useState(false);
    const [passErr, setpassErr] = useState(false);
    function LoginHandle(e) {
        e.preventDefault();
        if (user.length < 3 || password.length < 3) {
            alert("type correct value")
        } else {
            alert("all good :)")
        }
    }
    function UserHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setuserErr(true)
        } else {
            setuserErr(false)
        }
        setUser(item)
        // console.log(item);
    }
    function PassHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setpassErr(true)
        } else {
            setpassErr(false)
        }
        setPassword(item)
        // console.log(item);
    }
    return(
        <>
            <h1>Login</h1>
            <form onSubmit={LoginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={UserHandler} /><br />
                {
                    userErr?<span>user not valid</span>:""
                }<br />
                <input type="text" placeholder="Enter Password" onChange={PassHandler} /><br />
                {
                    passErr?<span style={{color:"red"}}>password not valid</span>:""
                }<br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default FormValid;