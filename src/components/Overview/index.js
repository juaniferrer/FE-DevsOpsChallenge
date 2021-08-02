import React, { useEffect, useState } from "react";
import {
  getAllAsignedAssets,
  getDevelopers,
  getAvailableAssets,
  addNewRegister,
  freeDevice,
} from "../../api/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import columns from "./columns";
import AssetModal from "../Assets/AssetModal";
import AssignNewAssetModal from "./AssignNewAssetModal";
import AlertDialog from "../Assets/AlertDialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "#1976d2",
      fontSize: 15,
      color: "white",
    },
    "& .row": { fontSize: 20 },
  },
});

const Overview = () => {
  const classes = useStyles();
  const [fetchingData, setFetchingData] = useState(true);
  const [registers, setRegisters] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [assets, setAssets] = useState([]);
  const [showAssetModal, setShowAssetModal] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showAddNewRegister, setShowAddNewRegister] = useState(false);
  const [registerSelected, setRegisterSelected] = useState(null);
  useEffect(() => {
    getAllAsignedAssets().then((data) => {
      setRegisters(data);
      setFetchingData(false);
    });
  }, []);

  const handleRowClick = (row) => {
    setRegisterSelected(row);
    setShowAssetModal(true);
  };

  const handleAddNewRegister = async () => {
    const devs = await getDevelopers();
    setDevelopers(devs);
    const availableAssets = await getAvailableAssets();
    setAssets(availableAssets);
    setShowAddNewRegister(true);
  };

  const handleFreeDevice = async () => {
    const response = await freeDevice(registerSelected.row.id);
    setShowAlertDialog(false);
    getAllAsignedAssets().then((data) => {
      setRegisters(data);
      setFetchingData(false);
    });
  };

  const handleCloseModal = () => {
    setRegisterSelected(null);
    setShowAssetModal(false);
  };

  const handleAssignNewAssetModal = async (data) => {
    setShowAddNewRegister(false);
    const response = await addNewRegister(data);
    getAllAsignedAssets().then((data) => {
      setRegisters(data);
      setFetchingData(false);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {showAssetModal && (
        <AssetModal
          showModal={showAssetModal}
          closeModal={() => handleCloseModal()}
          asset={registerSelected}
          handleFreeClick={() => {
            setShowAssetModal(false);
            setShowAlertDialog(true);
          }}
        />
      )}
      {showAlertDialog && (
        <AlertDialog
          openDialog={showAlertDialog}
          closeDialog={() => {
            setShowAlertDialog(false);
            setShowAssetModal(true);
          }}
          handleFree={() => handleFreeDevice()}
          asset={registerSelected}
        />
      )}
      {showAddNewRegister && (
        <AssignNewAssetModal
          developers={developers}
          assets={assets}
          open={showAddNewRegister}
          handleCloseForm={() => setShowAddNewRegister(false)}
          handleAssignNewAsset={(data) => handleAssignNewAssetModal(data)}
        />
      )}
      {fetchingData && <CircularProgress />}
      {!fetchingData && registers.length > 0 && (
        <div
          style={{
            width: 1255,
            marginTop: 25,
            marginBottom: 100,
          }}
          className={classes.root}
        >
          <DataGrid
            rows={registers}
            columns={columns}
            pageSize={10}
            getRowClassName={`row`}
            autoHeight
            disableExtendRowFullWidth
            onRowClick={(row) => handleRowClick(row)}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{ fontSize: 15, marginTop: 15, marginLeft: 10 }}
            onClick={() => handleAddNewRegister()}
          >
            Assign new asset
          </Button>
        </div>
      )}
    </div>
  );
};

export default Overview;
