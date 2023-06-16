import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import axios  from 'axios';
import EmployeeContext from "../../context/EmployeeContext";

const Datatable = () => {

 const {getAllemployee,dataemp,handleDelete} = useContext(EmployeeContext)
useEffect(() => {
 getAllemployee();
}, []);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
      
        return (
          <div className="cellAction">
            <Link to={"/employee/view/" + params.row.employeeId} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.employeeId)}
            >
              Delete
            </div>
            <div>
            <Link to={"/employee/" + params.row.employeeId}>
            <button className="userListEdit">Edit</button>
          </Link>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Employee
        <Link to="/employee/newemployee" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row.employeeId}
        rows={dataemp}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
