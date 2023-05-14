import React,{useState} from "react";
function Test() {
    const [userNname, changeName] = useState(0);
    function updatedata() {
        changeName(userNname + 1)
    }
    return(
        <>
            <h1>{userNname}</h1>
            <h3>State in React!</h3>
            <button onClick={updatedata}>Update data</button>
        </>
    )
}
export default Test;