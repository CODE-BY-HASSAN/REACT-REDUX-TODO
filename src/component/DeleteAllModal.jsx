import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

export default function DeleteAllModal({ click }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        fullWidth
        sx={{
          height: "55px",
          borderRadius: "16px",
          backgroundColor: "#ff2939",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 700,
          textTransform: "none",
          boxShadow: "0 8px 20px rgba(255, 41, 57, 0.15)",
          "&:hover": {
            backgroundColor: "#e91e2d",
          },
        }}
      >
        Delete All
      </Button>

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
                fontWeight: 500,
                mb: 1,
              }}
            >
              Delete All
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                mb: 3,
              }}
            >
              Are you sure you want to delete all todos?
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                gap: 1.5,
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
                onClick={click}
                variant="contained"
                sx={{
                  backgroundColor: "#ef4444",
                  "&:hover": {
                    backgroundColor: "#dc2626",
                  },
                }}
              >
                Delete All
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}