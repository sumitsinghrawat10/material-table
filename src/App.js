import React, { useState } from "react";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

const App = () => {
  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "xyz@gmail.com",
      phone: 980808089,
      age: "20",
      gender: "M",
      city: "Chennai",
      fee: 232323,
    },
    {
      name: "Neo",
      email: "abc@gmail.com",
      phone: 580808089,
      age: "null",
      gender: "M",
      city: "Chennai",
      fee: 632323,
    },
    {
      name: "Matix",
      email: "lmn@gmail.com",
      phone: 908008089,
      age: "22",
      gender: "F",
      city: "Delhi",
      fee: 932323,
    },
  ]);

  const columns = [
    {
      title: "Name",
      field: "name",
      sorting: false,
    },
    {
      title: "Email",
      field: "email",
      align: "center",
      filterPlaceholder: "filter email",
    },
    {
      title: "Phone",
      field: "phone",
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>null</em>,
      defaultSort: "asc",
      // customSor for custom functionlity
      export: "false", // this data will be not show while downloading data
    },
    {
      title: "Gender",
      field: "gender",
      lookup: { M: "Male", F: "Female" },
    },
    {
      title: "City",
      field: "city",
    },
    {
      title: "School",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "INR", minimumFractionDigits: 0 },
      // type:"boolean, numeric date time"
    },
  ];

  return (
    <>
      <MaterialTable
        columns={columns}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updateData = [...tableData];
              updateData[oldRow.tableData.id] = newRow;
              setTableData(updateData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updateData = [...tableData];
              updateData.splice(selectedRow.tableData.id, 1);
              setTableData(updateData);

              setTimeout(() => resolve(), 1000);
            }),
        }}
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction: true,
          },
        ]}
        onSearchChange={(selectedRow) => console.log()}
        options={{
          sorting: true,
          search: true,
          searchText: "",
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "filled",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 15],
          pageSize: 2,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "bottom", //bottom and both and top
          exportButton: true,
          exportAllData: true, // for export all pages of table
          exportFileName: "table data",
          addRowPosition: "first", //for edit table
          actionsColumnIndex: -1,
          selection: true, //for checkbox
          showSelectAllCheckbox: false, // for removing checkbox for ALL
          showTextRowsSelected: false, //for removing selection band at top
          selectionProps: (rowData) => ({
            disabled: rowData.name == "Raj",
            // color: "primary",
          }),
          grouping: true,
          columnsButton: true, //time being on top left
          rowStyle: { background: "#f5f5f5" },
          headerStyle: { background: "skyblue", fontStyle: "italic" },
        }}
        data={tableData}
        title="student data"
        icons={{ Add: () => <AddIcon /> }}
      />
    </>
  );
};

export default App;
