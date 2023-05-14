// import { useState } from 'react';
import './App.css';
// import PreviousStatFun from './component/PreviousStatFun';
// import PrePropsWithHook from './component/PrePropsWithHook';
// import StateWithObject from './component/StateWithObject';
import ContextAPI from './component/ContextAPI';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <PreviousStatFun /> */}
      {/* <PrePropsWithHook count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>Update count</button> */}
      {/* <StateWithObject /> */}
      <ContextAPI />
    </div>
  );
}

export default App;
