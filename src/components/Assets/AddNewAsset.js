import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  label: {
    fontSize: 50,
  },
  input: {
    fontSize: 20,
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    color: "#f44336",
  },
  button: {
    fontSize: 15,
  },
};

function AddNewAsset(props) {
  const { classes, open, handleCloseForm, handleAddAsset } = props;
  const [data, setData] = useState({});
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseForm}
        aria-labelledby="form-dialog-title"
      >
        <Typography variant="headline" component="h1" className={classes.title}>
          Add New Asset
        </Typography>
        <DialogContent>
          <TextField
            autoFocus
            label={
              <Typography variant="headline" component="h2">
                Brand (Apple, Dell, etc.)
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            margin="dense"
            id="brand"
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, brand: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="model"
            label={
              <Typography variant="headline" component="h2">
                Model
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, model: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="assettype"
            label={
              <Typography variant="headline" component="h2">
                Asset Type (Notebook, Keyboard, etc.)
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, assettype: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="imgurl"
            label={
              <Typography variant="headline" component="h2">
                Image Url
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, imgurl: e.target.value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            onClick={handleCloseForm}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            onClick={() => handleAddAsset(data)}
            color="primary"
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(AddNewAsset);
