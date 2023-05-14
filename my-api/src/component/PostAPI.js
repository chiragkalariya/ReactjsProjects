import React, { useState } from 'react'

const PostAPI = () => {
    const [uName, setUname] = useState("");
    const [uEmail, setUemail] = useState("");
    const [uPass, setUpass] = useState("");
    
    function saveData(e) {
        e.preventDefault();
        console.log(uName, uEmail, uPass);
        let data = {uName, uEmail, uPass}
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log('result', result);
            result.json().then((resp) => {
                console.log(resp);
            })
        })
    }
    return (
        <div>
            <form action="" onSubmit={saveData}>
                <input type="text" value={uName} name='name' onChange={(e) => {setUname(e.target.value)}} /> <br /> <br />
                <input type="text" value={uEmail} name='email' onChange={(e) => {setUemail(e.target.value)}} /> <br /> <br />
                <input type="text" value={uPass} name='password' onChange={(e) => {setUpass(e.target.value)}} /> <br /> <br />
                <button className='btn btn-primary'>Save</button>
            </form>
        </div>
    )
}

export default PostAPI
