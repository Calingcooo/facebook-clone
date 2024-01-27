import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/reducers/auth/auth";

const Home = () => {
  // const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(login())}
        className="border border-green-500 bg-green-200 font-bold px-5 rounded-md"
      >
        Test
      </button>
    </div>
  );
};

export default Home;
