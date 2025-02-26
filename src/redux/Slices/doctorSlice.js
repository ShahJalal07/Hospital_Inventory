import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    currencySymbol: "$",
  },
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },

    setCurrency: (state, action) => {
      state.currencySymbol = action.payload;
    },
  },
});

export const { setDoctors, setCurrency } = doctorSlice.actions;
export default doctorSlice.reducer;
