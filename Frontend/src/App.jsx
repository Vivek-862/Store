import './App.css'
import Home from "../src/components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Grains from "./components/Grain/Grain"
import Vegetables from './components/Products/Vegetables'

function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Vegetables" element={<Vegetables/>}/>
      <Route path="/Grains" element={<Grains/>}/>
    </Routes>
     
      
     
    </>
  )
}

export default App
