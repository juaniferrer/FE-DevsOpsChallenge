import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
  label: {
    fontSize: 14,
  },
  input: {
    fontSize: 15,
    minWidth: 500,
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

function AssignNewAssetModal(props) {
  const {
    classes,
    open,
    handleCloseForm,
    handleAssignNewAsset,
    assets,
    developers,
  } = props;
  const [data, setData] = useState({});
  return (
    <div>
      <Dialog open={open} onClose={handleCloseForm} fullWidth maxWidth="sm">
        <Typography variant="headline" component="h1" className={classes.title}>
          Assign Asset
        </Typography>
        <br />
        <DialogContent>
          <InputLabel className={classes.label} id="demo-simple-select-label">
            Asset
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            className={classes.input}
            value={data.asset}
            onChange={(e) =>
              setData((state) => ({ ...state, asset: e.target.value }))
            }
          >
            {assets.map((asset) => (
              <MenuItem
                className={classes.input}
                value={asset}
              >{`${asset.id} - ${asset.brand} - ${asset.model}`}</MenuItem>
            ))}
          </Select>
          <FormHelperText className={classes.input}>
            Please select which asset to assign
          </FormHelperText>
          <br />
          <InputLabel
            className={classes.label}
            id="demo-simple-select-label-dev"
          >
            Developer
          </InputLabel>
          <Select
            labelId="demo-simple-select-label-dev"
            className={classes.input}
            value={data.developer}
            onChange={(e) =>
              setData((state) => ({ ...state, developer: e.target.value }))
            }
          >
            {developers.map((developer) => (
              <MenuItem
                className={classes.input}
                value={developer}
              >{`${developer.id} - ${developer.name}`}</MenuItem>
            ))}
          </Select>
          <FormHelperText className={classes.input}>
            Please select the developer
          </FormHelperText>
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
            onClick={() => handleAssignNewAsset(data)}
            color="primary"
          >
            Accept
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(AssignNewAssetModal);
