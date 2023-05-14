import React, { useRef } from 'react';
import ChildofRef from './ChildofRef';

const ForwardRef = () => {
  let inputRef = useRef();
  function updateInput() {
    console.log(inputRef.current.value);
    inputRef.current.value = "1000"
    inputRef.current.style.color = "green"
    inputRef.current.focus();
    
  }
  return (
    <>
      <ChildofRef ref={inputRef} />
      <button onClick={updateInput}>Update inputbox</button>
    </>
  )
}

export default ForwardRef

