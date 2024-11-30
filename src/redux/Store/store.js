import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../Slices/DoctorSlice"; // Import the reducer

export const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});
