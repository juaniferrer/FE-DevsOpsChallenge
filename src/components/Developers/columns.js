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
    field: "name",
    headerName: "Name",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "phone",
    headerName: "Phone",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "address",
    headerName: "Address",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 200,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "city",
    headerName: "City",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "state",
    headerName: "State",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
  {
    field: "country",
    headerName: "Country",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
    renderCell: (cellValues) => renderTableCell(cellValues.value),
  },
];

export default columns;
