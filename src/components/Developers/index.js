import React, { useEffect, useState } from "react";
import {
  getDevelopers,
  addDeveloper,
  deleteDeveloper,
  getDeveloperAssets,
} from "../../api/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import columns from "./columns";
import AlertDialog from "./AlertDialog";
import DeveloperModal from "./DeveloperModal";
import AddNewDeveloper from "./AddNewDeveloper";
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

const Developers = () => {
  const classes = useStyles();
  const [fetchingData, setFetchingData] = useState(true);
  const [developers, setDevelopers] = useState([]);
  const [assets, setAssets] = useState([]);
  const [showDeveloperModal, setShowDeveloperModal] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [showAddNewDeveloper, setShowAddNewDeveloper] = useState(false);
  const [developerSelected, setDeveloperSelected] = useState(null);
  useEffect(() => {
    getDevelopers().then((data) => {
      setDevelopers(data);
      setFetchingData(false);
    });
  }, []);
  const handleRowClick = async (row) => {
    const response = await getDeveloperAssets(row.row.id);
    setAssets(response);
    setDeveloperSelected(row);
    setShowDeveloperModal(true);
  };
  const handleAddNewDeveloper = async (data) => {
    const response = await addDeveloper(data);
    setShowAddNewDeveloper(false);
    getDevelopers().then((data) => {
      setDevelopers(data);
      setFetchingData(false);
    });
  };
  const handleCloseModal = () => {
    setDeveloperSelected(null);
    setAssets(null);
    setShowDeveloperModal(false);
  };
  const handleDelete = async () => {
    const response = await deleteDeveloper(developerSelected.id);
    setShowAlertDialog(false);
    getDevelopers().then((data) => {
      setDevelopers(data);
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
      {showAlertDialog && (
        <AlertDialog
          openDialog={showAlertDialog}
          closeDialog={() => {
            setShowAlertDialog(false);
            setShowDeveloperModal(true);
          }}
          handleDelete={() => handleDelete()}
          developer={developerSelected}
        />
      )}
      {showAddNewDeveloper && (
        <AddNewDeveloper
          open={showAddNewDeveloper}
          handleCloseForm={() => setShowAddNewDeveloper(false)}
          handleAddDeveloper={(data) => handleAddNewDeveloper(data)}
        />
      )}
      {showDeveloperModal && (
        <DeveloperModal
          showModal={showDeveloperModal}
          closeModal={() => handleCloseModal()}
          developer={developerSelected}
          assets={assets}
          handleFreeClick={() => {
            setShowDeveloperModal(false);
            setShowAlertDialog(true);
          }}
          handleDeleteDeveloper={() => {
            setShowDeveloperModal(false);
            setShowAlertDialog(true);
          }}
        />
      )}
      {fetchingData && <CircularProgress />}
      {!fetchingData && developers.length > 0 && (
        <div
          style={{
            width: 1105,
            marginTop: 25,
            marginBottom: 100,
          }}
          className={classes.root}
        >
          <DataGrid
            rows={developers}
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
            onClick={() => setShowAddNewDeveloper(true)}
          >
            Add new developer
          </Button>
        </div>
      )}
    </div>
  );
};

export default Developers;
