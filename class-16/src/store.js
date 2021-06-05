import { configureStore } from '@reduxjs/toolkit';
import monthlyPaymentReducer from './monthlyPaymentSlice';

export default configureStore({
  reducer: {
    monthlyPayment: monthlyPaymentReducer,
  }
});