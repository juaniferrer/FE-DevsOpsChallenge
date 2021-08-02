import React from "react";
import Modal from "@material-ui/core/Modal";
import DeveloperCard from "./DeveloperCard";
export default function DeveloperModal({
  showModal,
  closeModal,
  developer,
  handleDeleteDeveloper,
  assets,
}) {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => closeModal()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeveloperCard
          developer={developer}
          closeModal={() => closeModal()}
          handleDeleteDeveloper={() => handleDeleteDeveloper()}
          assets={assets}
        />
      </Modal>
    </div>
  );
}
