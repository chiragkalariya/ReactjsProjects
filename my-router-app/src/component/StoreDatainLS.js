import React, { useState } from 'react'

const StoreDatainLS = () => {
    const [getData, setGetData] = useState();
    // const [store, setStore] = useState();
    let storeLS = JSON.parse(localStorage.getItem('data')) || [];
    storeLS.push(getData);
    function onSubmit(e) {
        e.preventDefault();
        // const allData = {
        //     getData
        // }
        // console.log(allData);
        localStorage.setItem("data", JSON.stringify(storeLS));
    }
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" placeholder='Enter your task' onChange={(e) => setGetData(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default StoreDatainLS; 
