import { Dashboard } from "./pages/Dashboard"
import { Share } from "./pages/Share"
import { SignIn } from "./pages/Signin"
import { SignUp } from "./pages/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/share/:shareId" element={<Share />}/>
    </Routes>
  </BrowserRouter>
}

export default App
