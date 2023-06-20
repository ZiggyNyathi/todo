import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import todolistReducer from './features/todolist/todolistSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todolist: todolistReducer,
  },
});
