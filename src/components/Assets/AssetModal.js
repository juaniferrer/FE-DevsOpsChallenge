import React from "react";
import Modal from "@material-ui/core/Modal";
import AssetCard from "./AssetCard";
export default function AssetModal({
  showModal,
  closeModal,
  asset,
  handleFreeClick,
  handleDeleteAsset,
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
        <AssetCard
          asset={asset}
          closeModal={() => closeModal()}
          handleFreeClick={handleFreeClick}
          handleDeleteAsset={handleDeleteAsset}
        />
      </Modal>
    </div>
  );
}
