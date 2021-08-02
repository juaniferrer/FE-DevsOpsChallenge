import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

export default function AlertDialog({
  openDialog,
  closeDialog,
  handleFree,
  handleDelete,
  asset,
  deleteAsset,
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
          {deleteAsset ? "Delete device? " : "Release device?"}
        </h3>
        <DialogContent>
          <h4 style={{ color: "grey", fontFamily: "unset" }}>
            {deleteAsset
              ? `Are you sure you want to delete ${asset.row.brand} - ${asset.row.model} ? This cannot be undone.`
              : `Are you sure you want to release the device? It will no longer be assigned to ${
                  asset.row.devName || asset.row.name
                }.`}
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
            onClick={deleteAsset ? handleDelete : handleFree}
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
