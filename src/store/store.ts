import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import maintenanceReducer from '../slices/maintenanceSlice'

const store = configureStore({ reducer: { 
  auth: authReducer,
  maintenance: maintenanceReducer } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
