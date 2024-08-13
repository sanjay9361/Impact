import { BrowserRouter, Routes, Route } from "react-router-dom"


import NewPage from "../NewPage"
import Home from "./Home"
import SignInpage from "./SignInpage"
import NextPage from "./NextPage"
import Vegtable from "../Vegtable"



function App() {


  return (



    <BrowserRouter>

      
      <Routes>
        <Route path='/' element={<SignInpage />} />
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/NewPage" element={<NewPage />}></Route>
        <Route path="/Nextpage" element={<NextPage />}></Route>
        <Route path="/Vegtable" element={<Vegtable />}></Route>
        

      </Routes>

    </BrowserRouter>





  )
}

export default App
