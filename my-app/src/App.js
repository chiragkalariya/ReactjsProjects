import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Page404 from './component/Page404';
import User from './component/User';
// import User from './User';
// import Member from './Member';
// import Test from './Usestae';
// import UsestateClass from './usestatewithclass';
// import Student   from './Propswithfunction';
// import Employes from './propsWithClass';
// import GetInputValue from './GetInputValue';
// import Profile from './ConditionalRendering';
// import FormValid from './formValidation';
// import PropsFunction from './PassFunctionasaProps';
// import Render from './render';
// import ComDidMount from './CompoDidMount';
// import ComDidUpdate from './CompDidUpdate';
// import ShoulCompUpdate from './shouldCompUpdate';
// import CompWillUnMount from './compWillUnMount';
// import HookUseEffect from './HookUseEffect';
// import StoreDatainLS from './StoreDatainLS';
// import Header from './component/Header';
// import HocComponent from './HocComponent';
// import ArrayWithMapFunc from './ArrayWithMapFunc';
// import NestedArray from './NestedArray';
// import ReuseComponent from './ReuseComponent';
// import PassDatatoParent from './PassDatatoParent';
// import UseMemo from './UseMemo';
// import UseRefinClass from './UseRefinClass';
// import UseRefinfunction from './UseRefinfunction';
// import ForwardRef from './ForwardRef';
// import UncontrolComponent from './UncontrolComponent';



// class Apptwo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "chirag kalariya"
//     }
//   }
//   render() {
//     return (
//       <>
//         <h1>Hello world {this.state.data}</h1>
//       </>
//     )
//   }
// }
// function App() {
//   function getData() {
//     alert('Hello from app')
//   }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <User data={getData} />
//       <Member data={getData} />
//     </>
//   );
// }

// export default Apptwo;
// class App extends Component {
//   // const[userName, setName] = useState("Arjun");
//   // function updateName() {
//   //   setName("Mahadev")
//   // }
//   constructor() {
//     super();
//     this.state = {
//       userName: "Bhim"
//     }
//   }
//   render() {
//     return(
//       <>
//         {/* <Test />
//         <UsestateClass /> */}
//         {/* <Student name={userName} email={"chiragkalariya80@gmail.com"} other={{address: "gujrat", mobile: "7698788661"}}/>
//         <Student name={"Rudra"} email={"chirag80@gmail.com"} other={{address: "girsomnath", mobile: "7698788661"}}/>
//         <button onClick={() => updateName()}>Update Name</button> */}
//         <Employes name={this.state.userName} age="25" />
//         <Employes name="Ram" age="22" />
//         <button onClick={() => this.setState({userName:"Hanuman"})}>Update Name</button>
//       </>
//     )
//   }
// }

function App() {
  // const [userName, setUserName] = useState("chirag")
  const employes = [
    {name: "Rahul Ladani", salary: 20000, address: "Gir Somnath"},
    {name: "Deep Kamani", salary: 50000, address: "Junagadh"},
    {name: "Chirag Kalariya", salary: 20000, address: "Dhanej"},
    {name: "Ankur Chhatrala", salary: 30000, address: "Manavadar"}
  ]
  const userTwo = "Shyam"
  // function getData() {
  //   alert("hello from app");
  // }
  // function parentalert(item) {
  //   alert(item.nickname)
  //   console.log(item);
  // }
  return(
    <div className='App'>
      {/* <Header /> */}
      
      {/* <GetInputValue /> */}
      {/* <Profile /> */}
      {/* <FormValid /> */}
      {/* <PropsFunction data={getData} /> */}
      {/* <Member data={getData} /> */}
      {/* <Render /> */}
      {/* <button onClick={() => setUserName("Rahul")}>Update Name</button> */}
      {/* <ComDidMount /> */}
      {/* <ComDidUpdate /> */}
      {/* <ShoulCompUpdate /> */}
      {/* <CompWillUnMount /> */}
      {/* <HookUseEffect /> */}
      {/* <StoreDatainLS /> */}
      {/* <ArrayWithMapFunc /> */}
      {/* <NestedArray /> */}
      {/* <h1>Reusecomponent with list</h1>
      {
        employes.map((item, i) => 
          <ReuseComponent data={item} />  
        )
      } */}
      {/* <PassDatatoParent alert={parentalert} /> */}
      {/* <UseMemo /> */}
      {/* <UseRefinClass /> */}
      {/* <UseRefinfunction /> */}
      {/* <ForwardRef /> */}
      {/* <UncontrolComponent /> */}
      {/* <HocComponent /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/User/:name" element={<User />} />
          <Route path="/*" element={<Navigate to="/" />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

