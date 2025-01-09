import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './reducers/numberReducer';

const store = configureStore({
  reducer: {
    numbers: numberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
