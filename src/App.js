
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';
import UserDetail from './UserDetail';



function App() {
  return (
    <div className="App">
         <nav className="main-nav">
            
           <Link className='navbar' to="/">Home</Link>

           <Link className='navbar' to ="/users"> UserList </Link>  
             
           <Link className='navbar' to ="/userDetail/:id"> UserDetail </Link>  

         </nav>

         <Routes>
         

              <Route path="/" element={<Home/>} />

              <Route path="/users" element={<Users/>} />
             
               <Route path="/user/:id" element={<UserDetail/>} />


         </Routes>


    </div>
  );
}

export default App;
