import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
addTodo: (state,actions)=>{
    state.todos.push(actions.payload)
}
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer