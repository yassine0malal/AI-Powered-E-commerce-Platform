import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "../features/auth/authSlice";
import userSlice  from "../features/auth/userSlice";

export const store = configureStore({
    reducer: {
        calc: calcReducer,
        user:userSlice,
        // x:.., it have more than this one
        // y:
    },
})