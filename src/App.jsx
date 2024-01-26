import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
