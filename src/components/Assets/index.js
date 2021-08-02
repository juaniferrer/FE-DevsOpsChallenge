import React, { useEffect, useState } from "react";
import { getAssets, freeDevice, addAsset, deleteAsset } from "../../api/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import columns from "./columns";
import AssetModal from "./AssetModal";
import AlertDialog from "./AlertDialog";
import AddNewAsset from "./AddNewAsset";
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

const Assets = () => {
  const classes = useStyles();
  const [fetchingData, setFetchingData] = useState(true);
  const [assets, setAssets] = useState([]);
  const [showAssetModal, setShowAssetModal] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showAddNewAsset, setShowAddNewAsset] = useState(false);
  const [assetSelected, setAssetSelected] = useState(null);
  const [shouldDeleteAsset, setShouldDeleteAsset] = useState(false);

  useEffect(() => {
    getAssets().then((data) => {
      setAssets(data);
      setFetchingData(false);
    });
  }, []);

  const handleRowClick = (row) => {
    setAssetSelected(row);
    setShowAssetModal(true);
  };

  const handleCloseModal = () => {
    setAssetSelected(null);
    setShowAssetModal(false);
  };

  const handleFreeDevice = async () => {
    const response = await freeDevice(assetSelected.row.id);
    setShowAlertDialog(false);
    getAssets().then((data) => {
      setAssets(data);
      setFetchingData(false);
    });
  };

  const handleAddAsset = async (data) => {
    const response = await addAsset(data);
    setShowAddNewAsset(false);
    getAssets().then((data) => {
      setAssets(data);
      setFetchingData(false);
    });
  };

  const handleDelete = async () => {
    const response = await deleteAsset(assetSelected.id);
    setShouldDeleteAsset(false);
    setShowAlertDialog(false);
    getAssets().then((data) => {
      setAssets(data);
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
          asset={assetSelected}
          handleFreeClick={() => {
            setShowAssetModal(false);
            setShowAlertDialog(true);
          }}
          handleDeleteAsset={() => {
            setShouldDeleteAsset(true);
            setShowAssetModal(false);
            setShowAlertDialog(true);
          }}
        />
      )}
      {showAlertDialog && (
        <AlertDialog
          openDialog={showAlertDialog}
          deleteAsset={shouldDeleteAsset}
          closeDialog={() => {
            setShowAlertDialog(false);
            setShowAssetModal(true);
          }}
          handleFree={() => handleFreeDevice()}
          handleDelete={() => handleDelete()}
          asset={assetSelected}
        />
      )}
      {showAddNewAsset && (
        <AddNewAsset
          open={showAddNewAsset}
          handleCloseForm={() => setShowAddNewAsset(false)}
          handleAddAsset={(data) => handleAddAsset(data)}
        />
      )}
      {fetchingData && <CircularProgress />}
      {!fetchingData && assets.length > 0 && (
        <div
          style={{
            width: 1105,
            marginTop: 25,
            marginBottom: 100,
          }}
          className={classes.root}
        >
          <DataGrid
            rows={assets}
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
            onClick={() => setShowAddNewAsset(true)}
          >
            Add new asset
          </Button>
        </div>
      )}
    </div>
  );
};

export default Assets;
