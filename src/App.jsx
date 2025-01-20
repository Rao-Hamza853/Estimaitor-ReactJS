import { Route, Routes } from "react-router"
import BillHistory from "./pages/bill-history"
import Home from "./pages/home"

function App() {
 

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/bill' element={<BillHistory/>} />
    </Routes>
    // <>
    // <Home/>
    // </>
  )
}

export default App
