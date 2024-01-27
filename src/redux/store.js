import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/auth/auth";

export default configureStore({
  reducer: {
    auth: loginReducer,
  },
});
