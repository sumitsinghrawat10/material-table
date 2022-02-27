import React, { useState } from "react";
import MaterialTable from "material-table";

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
          paginationPosition: "top", //bottom and both
          exportButton: true,
          exportAllData: true, // for export all pages of table
          exportFileName: "table data",
        }}
        data={tableData}
        title="student data"
      />
    </>
  );
};

export default App;
