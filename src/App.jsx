import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
import Home from "./pages/ProtectedRoutes/Home";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  return (
    <Routes>
      {/* <Route path="/" element={<SignUp />} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={!isLoggedIn ? <Login /> : <Home />} />
      </Route>
    </Routes>
  );
}

export default App;
