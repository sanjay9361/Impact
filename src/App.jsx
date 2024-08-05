import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"


import NewPage from "../NewPage"
import Home from "./Home"
import SignInpage from "./SignInpage"




function App() {


  return (












    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<SignInpage />} />
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/NewPage" element={<NewPage />}></Route>

      </Routes>

    </BrowserRouter>





  )
}

export default App
