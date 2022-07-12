import { Route, Router, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import ShowDairy from "./pages/showdairy"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"
 
function App() {

  return (
    <Routes>
      <Route path="/"element={<SignUp />}/>
      <Route path="/signin"element={<SignIn />}/>
      <Route path="/signup"element={<SignUp />}/>
      <Route path="/dashboard"element={<Dashboard />}/>
      <Route path="/showdairy"element={<ShowDairy />}/>
      <Route path="*" element={<SignUp />} />
    </Routes>
  )
}

export default App
