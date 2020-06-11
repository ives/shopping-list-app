import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function FormMessage({ alertType, messageOverride = "", callbackParent }) {

  const isOpen = alertType !== "";
  const severity = alertType === "success" ? "success" : "error";

  let message =
    severity === "success"
      ? "Operation was succesful"
      : "There has been a problem";
  message = messageOverride !== "" ? messageOverride : message;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    callbackParent("");
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose}>
      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default FormMessage;
