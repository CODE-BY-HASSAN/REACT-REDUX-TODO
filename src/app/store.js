import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./createSlices/todo"

export const store = configureStore({ reducer: {
    todo : todoReducer
} })