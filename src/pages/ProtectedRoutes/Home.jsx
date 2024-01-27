import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/auth/auth";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    alert("Paalam tanga!");
    dispatch(logout());
  };

  console.log(isLoggedIn);

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      Home
    </div>
  );
};

export default Home;
