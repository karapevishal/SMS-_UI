import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Maintenance {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Pending';
  dueDate: string;
  remarks?: string;
}

interface MaintenanceState {
  list: Maintenance[];
  loading: boolean;
  error: string | null;
  selected: Maintenance | null;
}

const initialState: MaintenanceState = {
  list: [],
  loading: false,
  error: null,
  selected: null,
};

// Async thunk to fetch maintenance history
export const fetchMaintenance = createAsyncThunk(
  'maintenance/fetchMaintenance',
  async () => {
    const response = await axios.get<Maintenance[]>('/api/maintenance');
    return response.data;
  }
);

const maintenanceSlice = createSlice({
  name: 'maintenance',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Maintenance>) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaintenance.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMaintenance.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder.addCase(fetchMaintenance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch';
    });
  },
});

export const { setSelected } = maintenanceSlice.actions;
export default maintenanceSlice.reducer;
