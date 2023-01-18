import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const gamingUser= localStorage.getItem("gamingUser");
const user = JSON.parse(gamingUser);
const initialState = {
  user: user || null,
  loading: false,
  error: "",
};

export const registerUser = createAsyncThunk("registerUser", async (body) => {
  return axios
    .post("https://gaming-backend.vercel.app/api/v1/user/register", body)
    .then((res) => res.data);
});

export const loginUser = createAsyncThunk("login", async (body) => {
  return axios
    .post("https://gaming-backend.vercel.app/api/v1/user/login", body)
    .then((res) => res.data);
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    logOut: (state) =>{
      localStorage.removeItem("gamingUser")
      localStorage.removeItem("gamingToken")
      state.user = null

    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        if (action.payload.message) {
          state.error = action.payload.message;
        }
        if (action.payload.success == false) {
          state.error = action.payload.message;
        } else {
          const gamingUser = action.payload.user;
          localStorage.setItem("gamingUser", JSON.stringify(gamingUser));
          const gamingToken = action.payload.token
          localStorage.setItem("gamingToken", JSON.stringify(gamingToken));
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        if (action.payload.message) {
          state.error = action.payload.message;
        }
        if (action.payload.success == false) {
          state.error = action.payload.message;
        } else {
          const gamingUser = action.payload.user;
          localStorage.setItem("gamingUser", JSON.stringify(gamingUser));
          const gamingToken = action.payload.token
          localStorage.setItem("gamingToken", JSON.stringify(gamingToken));
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const {  logOut  } = userSlice.actions;
export default userSlice.reducer;
