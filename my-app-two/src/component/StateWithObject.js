import React, { useState } from 'react'

const StateWithObject = () => {
    let employ = {
        name : "Rahul",
        age : 25,
        email : "rahulpatel@gmail.com"
    }
    const [data, setData] = useState(employ);
    return (
        <div>
            <h2>State with Object</h2>
            <input type="text" placeholder='Enter Your Name' value={data.name} onChange={(e) => {setData({...data,name: e.target.value})}} />
            <input type="text" placeholder='Enter Your Age' value={data.age} onChange={(e) => {setData({...data,age: e.target.value})}} />
            <input type="text" placeholder='Enter Your Email' value={data.email} onChange={(e) => {setData({...data,email: e.target.value})}} />
            <button>Save</button>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
            <h3>{data.email}</h3>
        </div>
    )
}

export default StateWithObject
