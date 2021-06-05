import { createSlice } from '@reduxjs/toolkit';

export const monthlyPaymentSlice = createSlice({
  name: 'monthlyPayment',
  initialState: {
    amount: 0
  },
  reducers: {
    setNewAmount: (state, action) => {
      state.amount = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNewAmount } = monthlyPaymentSlice.actions;

export default monthlyPaymentSlice.reducer;