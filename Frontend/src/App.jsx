import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddUser from "./components/core/User/AddUser"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser/>} />
      </Routes>
    </>
  )
}

export default App