import React, { useEffect, useState } from 'react'

const FetchApiData = () => {
    const [data, setData] = useState([]);
    const [uName, setUname] = useState("");
    const [uEmail, setUemail] = useState("");
    const [uPhone, setUphone] = useState("");
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        getList();
    }, [])
    function getList() {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((resp) => {
                setData(resp);
                setUname(resp[0].name)
                setUemail(resp[0].email)
                setUphone(resp[0].phone)
                setUserId(resp[0].id)
            })
        })
    }
    // on delete btn click to delete data from table
    function deleteUser(id) {
        alert(id)
        fetch(`https://jsonplaceholder.typicode.com/users${id}`,{
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
            })
        })
    }
    // on update btn click to show data on form
    function setUser(id) {
        // console.log(data[id]);
        let item = data[id-1];
        setUname(item.name)
        setUemail(item.email)
        setUphone(item.phone)
        setUserId(item.id)  
    }
    function updateUser(e) {
        e.preventDefault();
        let item = {uName, uEmail, uPhone, userId}
        fetch(`https://jsonplaceholder.typicode.com/users${userId}`,{
            method: 'PUT',
            put: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getList()
            })
        })
    }
    return (
        <div className='container d-flex align-items-center'>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone no.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i, k) => 
                            <tr key={k}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.phone}</td>
                                <td><button className='btn btn-danger' onClick={() => deleteUser(i.id)}>Delete</button></td>
                                <td><button className='btn btn-primary' onClick={() => setUser(i.id)}>Update</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <form action="" style={{width: "500px", marginInline: "auto"}}>
                <fieldset style={{marginBottom: '15px'}}>Update API Data</fieldset>
                <input type="text" value={uName} onChange={(e) => setUname(e.target.value)} name='name' className='form-control' placeholder='Enter Your Name' /><br />
                <input type="text" value={uEmail} onChange={(e) => setUemail(e.target.value)} name='email' className='form-control' placeholder='Enter Your Email' /><br />
                <input type="text" value={uPhone} onChange={(e) => setUphone(e.target.value)} name='phone' className='form-control' placeholder='Enter Your Phone number' /><br />
                <button className='btn btn-success' onClick={updateUser}>Save</button>
            </form>
        </div>
    )
}

export default FetchApiData;


