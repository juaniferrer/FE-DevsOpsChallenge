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

function AddNewDeveloper(props) {
  const { classes, open, handleCloseForm, handleAddDeveloper } = props;
  const [data, setData] = useState({});
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseForm}
        aria-labelledby="form-dialog-title"
      >
        <Typography variant="headline" component="h1" className={classes.title}>
          Add New Developer
        </Typography>
        <DialogContent>
          <TextField
            autoFocus
            label={
              <Typography variant="headline" component="h2">
                First Name
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            margin="dense"
            id="firstName"
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, firstName: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="lastName"
            label={
              <Typography variant="headline" component="h2">
                Last Name
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, lastName: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="phone"
            type="number"
            label={
              <Typography variant="headline" component="h2">
                Phone
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, phone: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="address"
            label={
              <Typography variant="headline" component="h2">
                Address
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, address: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="city"
            label={
              <Typography variant="headline" component="h2">
                City
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, city: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="state"
            label={
              <Typography variant="headline" component="h2">
                State
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((prevState) => ({ ...prevState, state: e.target.value }))
            }
          />
          <TextField
            margin="dense"
            id="country"
            label={
              <Typography variant="headline" component="h2">
                Country
              </Typography>
            }
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            fullWidth
            onChange={(e) =>
              setData((state) => ({ ...state, country: e.target.value }))
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
            onClick={() => handleAddDeveloper(data)}
            color="primary"
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(AddNewDeveloper);
