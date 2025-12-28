import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../routes/home/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
