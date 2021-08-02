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
    width: 100,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
    headerAlign: "center",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "brand",
    headerName: "Brand",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 120,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "model",
    headerName: "Model",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 325,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "developerId",
    headerName: "Dev ID",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "fromDate",
    headerName: "Date",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 355,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
];

export default columns;
