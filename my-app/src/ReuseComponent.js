import React from 'react'

const ReuseComponent = (props) => {
    return (
        <div>
            <div>
                <span>{props.data.name}</span>
                <span>{props.data.salary}</span>
                <span>{props.data.address}</span>

            </div>
        </div>
    )
}

export default ReuseComponent;

