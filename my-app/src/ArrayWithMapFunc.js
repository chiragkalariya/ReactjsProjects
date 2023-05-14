import React from 'react'
import { Table } from 'react-bootstrap';

const ArrayWithMapFunc = () => {
    const myArray = ["Ram","Bharat","Lakhan","Satrughn"];
    const students = [
        {name:"chirag", email:"chiragkalariya80@gmail.com", contact:7698788661},
        {name:"deep", email:"deepk@gmail.com", contact:98564258645},
        {name:"rahul", email:"rahulpatel@gmail.com", contact:8954525875}
    ]
    return (
        <div>
            {/* {
                myArray.map((uname) => 
                    <h1>{uname}</h1>
                )
            } */}
            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((data, i) => 
                            data.contact === 7698788661 ? 
                            <tr key={i}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.contact}</td>
                            </tr>:null
                        )
                    }
                </tbody>
            </Table>
            {
                students.map((student, i) => {
                    return (
                        <div key={i}>
                            <h2>{student.name}</h2>
                            <h2>{student.email}</h2>
                            <h2>{student.contact}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ArrayWithMapFunc;
