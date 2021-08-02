import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default function AlertDialog({
  openDialog,
  closeDialog,
  handleDelete,
  developer,
}) {
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <h3 style={{ marginLeft: 20, marginTop: 20, fontFamily: "unset" }}>
          Delete developer?
        </h3>
        <DialogContent>
          <h4 style={{ color: "grey", fontFamily: "unset" }}>
            {`Are you sure you want to delete ${developer.row.id} - ${developer.row.name} ? This cannot be undone.`}
          </h4>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ fontSize: 13 }}
            onClick={closeDialog}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            style={{ fontSize: 13 }}
            onClick={handleDelete}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
