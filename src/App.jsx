import { Route, Router, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import ShowDairy from "./pages/showdairy"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"
 
function App() {

  return (
    <Routes>
      <Route path="/onlinedairyapp/dist/"element={<SignUp />}/>
      <Route path="/onlinedairyapp/dist/signin"element={<SignIn />}/>
      <Route path="/onlinedairyapp/dist/signup"element={<SignUp />}/>
      <Route path="/onlinedairyapp/dist/dashboard"element={<Dashboard />}/>
      <Route path="/onlinedairyapp/dist/showdairy"element={<ShowDairy />}/>
      <Route path="/onlinedairyapp/dist/*" element={<SignUp />} />
    </Routes>
  )
}

export default App
