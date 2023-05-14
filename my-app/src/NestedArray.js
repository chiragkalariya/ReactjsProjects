import React from 'react'
import { Table } from 'react-bootstrap';


const NestedArray = () => {
    const myArray = [
        {name: "chirag", email: "chiragk@gmail.com", other: [
            {contact: 7698788661, age: 25},
            {contact: 7698788661, age: 25},
            {contact: 7698788661, age: 25}
        ]},
        {name: "rahul", email: "rahulp@gmail.com", other: [
            {contact: 9578625387, age: 25},
            {contact: 9578625387, age: 25},
            {contact: 9578625387, age: 25}
        ]}
    ];
    return (
        <Table striped variant='dark'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>other</th>
                </tr>
            </thead>
            <tbody>
            {
                myArray.map((data, i) => 
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{data.name}</td> 
                        <td>{data.email}</td>
                        <td>
                            <Table striped variant='light'>
                                <thead>
                                    <th>Contact</th>
                                    <th>Age</th>
                                </thead>
                                <tbody>
                                    {
                                        data.other.map((item, i) => 
                                            <tr key={i}>
                                                <td>{item.contact}</td>
                                                <td>{item.age}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </Table>
    )
}

export default NestedArray;

