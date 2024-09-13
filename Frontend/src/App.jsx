import './App.css'
import Home from "../src/components/Home/Home"
import {Routes,Route} from "react-router-dom"
import Products from "../src/components/Products/Products"

function App() {
 

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Products" element={<Products/>}/>
    </Routes>
     
      
     
    </>
  )
}

export default App
