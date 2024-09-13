import './App.css'
import Home from "../src/components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Grains from "../src/components/Products/Grains"
import Vegetables from './components/Products/Vegetables'

function App() {
 

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vegetables" element={<Vegetables/>}/>
      <Route path="/Grains" element={<Grains/>}/>
    </Routes>

    </div>
    
    
     
      
     
    </>
  )
}

export default App
