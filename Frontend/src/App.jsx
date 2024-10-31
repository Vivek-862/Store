import './App.css'
import Home from "../src/components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Grains from "../src/components/Products/Grains"
import Vegetables from './components/Products/Vegetables'
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import toast, { Toaster } from 'react-hot-toast';
import AuthProvider, { useAuth } from './components/context/AuthProvider';

function App() {
  const[authUser,setAuthUser]=useAuth()
  console.log(authUser);
 

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vegetables" element={authUser?<Vegetables/>:<Navigate to="/signup"/>}/>
      <Route path="/Grains" element={authUser?<Grains/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      
    </Routes>
    <Toaster/>

    </div>
    
    
     
      
     
    </>
  )
}

export default App
