import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import ContactUs from './component/ContactUs';
// import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Company from './component/Company';
import Chenal from './component/Chenal';
import Other from './component/Other';
import Login from './component/Login';

function App() {
  let users = [
    { id: 1, name: 'chirag', email: 'chirag@gmail.com' },
    { id: 2, name: 'rahul', email: 'rahul@gmail.com' },
    { id: 3, name: 'deep', email: 'deep@gmail.com' },
    { id: 4, name: 'ankur', email: 'ankur@gmail.com' },
  ]
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus/' element={<ContactUs />}>
          <Route path='company' element={<Company />} />
          <Route path='chenal' element={<Chenal />} />
          <Route path='other' element={<Other />} />
        </Route>
        <Route path='/user/:name' element={<User />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/*' element={<Page404 />} /> */}
      </Routes>
      {/* <div className='nav justify-content-center'>
        {
          users.map((item) => 
            <Link className='nav-link' to={"user/"+ item.id}>{item.name}</Link>
          )
        }
      </div> */}

    </div>
  )
}

export default App;
