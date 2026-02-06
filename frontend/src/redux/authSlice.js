// Auth Slice - Manages authentication state (login, logout, user roles)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock users for simulation
const mockUsers = [
  { id: 1, email: 'client@demo.com', password: 'client123', name: 'John Client', role: 'client', avatar: null },
  { id: 2, email: 'admin@demo.com', password: 'admin123', name: 'Admin User', role: 'admin', avatar: null },
];

const initialState = {
  user: JSON.parse(localStorage.getItem('spacer_user')) || null,
  isAuthenticated: !!localStorage.getItem('spacer_user'),
  role: localStorage.getItem('spacer_role') || null,
  loading: false,
  error: null,
  users: mockUsers, // Store all mock users
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { getState, rejectWithValue }) => {
    const { users } = getState().auth;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return rejectWithValue('Invalid email or password');
    }
    // Return safe user (no password)
    const safeUser = { ...user, password: undefined };
    return safeUser;
  }
);

// Async thunk for register
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password, role = 'client' }, { getState, rejectWithValue }) => {
    const { users } = getState().auth;
