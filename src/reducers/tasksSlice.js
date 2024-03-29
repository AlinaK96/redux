
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasksData from '../data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasksData);
    }, 1000);
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    status: 'idle',
    error: null
  },
  reducers: {
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.tasks = action.payload;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

export default tasksSlice.reducer;
