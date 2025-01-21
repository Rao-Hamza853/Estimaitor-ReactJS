import { Route, Routes } from "react-router"
import BillHistory from "./pages/bill-history"
import Home from "./pages/home"
import Profile from "./pages/profile"

function App() {
 

  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/bill' element={<BillHistory/>} />
     <Route path='/profile' element={<Profile/>} />
    </Routes>
    // <>
    // <Home/>
    // </>
  )
}

export default App
