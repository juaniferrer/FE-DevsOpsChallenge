const renderTableCell = (value) => (
  <div
    style={{
      color: "black",
      fontSize: 15,
      width: "100%",
      textAlign: "center",
    }}
  >
    {value}
  </div>
);

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "brand",
    headerName: "Brand",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "model",
    headerName: "Model",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 500,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "assetType",
    headerName: "Asset Type",
    type: "number",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
];

export default columns;
