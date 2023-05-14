import React, {forwardRef} from 'react'

const ChildofRef = (prop, ref) => {
    return (
        <>
            <input type="text" ref={ref} />
        </>
    )
}

export default forwardRef(ChildofRef);
