import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addTodo } from "./app/createSlices/todo";
import EditModal from "./component/EditModal";
import DeleteModal from "./component/DeleteModal";
import DeleteAllModal from "./component/DeleteAllModal";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos);

  const [input, setInput] = useState("");

  const addTodos = () => {
    if (input.trim() == "") {
      return toast("Enter a task!");
    }

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title: input,
      }),
    );

    toast.dark("Add todo successfully!");

    setInput("");
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex flex-col items-center px-4 py-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-5 tracking-tight">
          Todo App
        </h1>

        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-4 md:p-5">
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter your todo..."
              className="flex-1 bg-slate-900 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
            />

            <button
              onClick={addTodos}
              type="button"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-cyan-500/20"
            >
              Add Todo
            </button>
          </div>

          <div className="space-y-2 max-h-[45vh] overflow-y-auto pr-2">
            {todo.length > 0 ? (
              todo.map((todo) => {
                return (
                  <div
                    className="flex items-center justify-between gap-3 bg-slate-900 border border-slate-700 rounded-xl px-3 py-3"
                    key={todo.id}
                  >
                    <p className="text-white text-base break-all">
                      {todo.title}
                    </p>

                    <div className="flex items-center gap-2 shrink-0">
                      <EditModal todo={todo} />

                      <DeleteModal todo={todo} />
                    </div>
                  </div>
                );
              })
            ) : (
              <h1 className="text-white text-center py-4">No todos</h1>
            )}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-700">
            <DeleteAllModal todo={todo} />
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
