import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
  },
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

export const { setDoctors } = doctorSlice.actions;
export default doctorSlice.reducer;
