import React from "react";
import Button from "@mui/material/Button";
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Button
      className="btn btn-lg btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
      variant="contained"
      sx={{ mr: 1 }}
    >
      {triggerText}
    </Button>
  );
};
export default Trigger;
