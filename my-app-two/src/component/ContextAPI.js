import React, { createContext } from 'react'
import ComA from './ComA'

const { FirstName } = createContext()
const { LastName } = createContext()

const ContextAPI = () => {
    return (
        <>
            <FirstName.Provider value={"Chirag"}>
                <LastName.Provider value={"Kalariya"}>
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};

export default ContextAPI
export { FirstName, LastName }
