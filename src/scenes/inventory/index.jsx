import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { mockDataInventory } from "../../data/mockData";
import Header from "../../components/Header";

const Inventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "holdingsRecordId",
      headerName: "holdingsRecordId",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "barcode",
      headerName: "barcode",
      flex: 1,
    },
    {
      field: "materialTypeId",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
      rederCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>;
      },
    },
    {
      field: "temporaryLoanTypeId",
      headerName: "temporaryLoanTypeId",
      flex: 1,
    },
    {
      field: "permanentLoanTypeId",
      headerName: "permanentLoanTypeId",
      flex: 1,
    },
    {
      field: "temporaryLocationId",
      headerName: "temporaryLocationId",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVENTORY" subtitle="List of products in inventory" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInventory}
          columns={columns}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Inventory;
