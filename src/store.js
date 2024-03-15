import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasksSlice';

const  store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false 
    })
});

export default store