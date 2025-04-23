import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login"
import SignUp from "./components/signup/SignUp";
import { SidebarDemo } from "./components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<SidebarDemo/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
