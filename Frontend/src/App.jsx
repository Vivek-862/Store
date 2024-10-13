import './App.css'
import Home from "../src/components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Grains from "../src/components/Products/Grains"
import Vegetables from './components/Products/Vegetables'
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"

function App() {
 

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vegetables" element={<Vegetables/>}/>
      <Route path="/Grains" element={<Grains/>}/>
      <Route path="/signup" element={<Signup/>}/>
      
      
    </Routes>

    </div>
    
    
     
      
     
    </>
  )
}

export default App
