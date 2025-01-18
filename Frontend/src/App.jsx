import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AddUser from "./components/core/User/AddUser"
import EditUser from "./components/core/User/EditUser"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:userId" element={<EditUser />} />
      </Routes>
    </>
  )
}

export default App