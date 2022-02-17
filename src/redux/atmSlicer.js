import { createSlice } from "@reduxjs/toolkit";

const atmSlicer = createSlice({
  name: "atm",
  initialState: {
    showAtm: false,
    balance: 1000,
  },
  reducers: {
    toggleAtm: (state) => {
      state.showAtm = !state.showAtm;
    },
    withdrawl: (state, action) => ({
      ...state,
      balance: state.balance - action.payload,
    }),
    deposited: (state, action) => ({
      ...state,
      balance: state.balance + action.payload,
    }),
  },
});
export const { toggleAtm, withdrawl, deposited } = atmSlicer.actions;

export default atmSlicer.reducer;