import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
    editTodo: (state, actions) => {
      state.todos.map((todo) => {
        if (todo.id === actions.payload.id) {
          todo.title = actions.payload.title;
        }
      });
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    deleteAllTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id == actions.payload);
    },
  },
});

export const { addTodo, editTodo, deleteTodo, deleteAllTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
