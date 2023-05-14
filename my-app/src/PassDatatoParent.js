import React from 'react'
import Button from 'react-bootstrap/esm/Button';

const PassDatatoParent = (props) => {
    const uData = {name: "Radhe Radhe", nickname: "Madhav"}
    return (
        <>
            <h1>send data child to parent div</h1><br />
            <Button onClick={() => props.alert(uData)}>Alert</Button>
        </>
    )
}

export default PassDatatoParent;
