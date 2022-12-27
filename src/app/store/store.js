import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slice/authSlice'

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
