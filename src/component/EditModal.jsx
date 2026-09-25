import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { editTodo } from "../app/createSlices/todo";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1e293b",
  border: "1px solid #334155",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

export default function EditModal({ todo }) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const [input, setInput] = React.useState(todo.title);

  const updateHandler = () => {
    dispatch(
      editTodo({
        id: todo.id,
        title: input,
      }),
    );
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        type="button"
        className="px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500 hover:text-slate-950 transition"
      >
        Edit
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                fontWeight: 700,
                mb: 3,
              }}
            >
              Edit
            </Typography>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Update your todo..."
              className="w-full bg-slate-900 border border-slate-600 text-white placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1.5,
                mt: 3,
              }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{
                  color: "#94a3b8",
                  borderColor: "#475569",
                }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f59e0b",
                  "&:hover": {
                    backgroundColor: "#d97706",
                  },
                }}
                onClick={() => {
                  updateHandler();
                  handleClose();
                }}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
