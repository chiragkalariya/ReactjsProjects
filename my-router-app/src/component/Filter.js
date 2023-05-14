import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('age'));
    console.log(searchParams.get('city'));
    let age = searchParams.get('age');
    let city = searchParams.get('city');
    return (
        <>
            <div>
                <h2>Filter Page</h2>
                <p>Age : {age}</p>
                <p>City {city}</p>
                <input type="text" style={{width: "50%",marginInline: "auto"}} className='form-control' onChange={(e) => setSearchParams({text:e.target.value,age:15})} /><br />
                <button className='btn btn-primary' onClick={() => setSearchParams({age: 40})}>SetSearchParams</button>
            </div>
        </>
    )
}

export default Filter
