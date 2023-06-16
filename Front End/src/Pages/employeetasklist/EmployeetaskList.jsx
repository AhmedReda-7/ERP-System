import "./emptasklist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { employeetaskColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import axios  from 'axios';
import EmployeeTaskContext  from "../../context/EmployeeTaskContext";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

const EmployeetaskList = ({logOut}) => {
    
 const {getAllemployeetast,data,handleDelete} = useContext(EmployeeTaskContext);
useEffect(() => {
 getAllemployeetast();
}, []);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
      
        return (
          
          <div className="cellAction">
            <Link to={"/employeetask/view/" + params.row.taskId} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.taskId)}
            >
              Delete
            </div>
            <div>
            <Link to={"/employeetask/" + params.row.taskId}>
            <button className="userListEdit">Edit</button>
          </Link>
            </div>
        
            
          
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="datatable">
<div className="datatableTitle">
Add New EmployeeTask
  <Link to="/employeetask/newemployeetask" className="link">
    Add New
  </Link>
</div>
<DataGrid
  className="datagrid"
  getRowId={(row) => row.taskId}
  rows={data}
  columns={employeetaskColumns.concat(actionColumn)}
  pageSize={9}
  rowsPerPageOptions={[9]}
  checkboxSelection
/>
</div>
      </div>
    </div>
  );
};

export default EmployeetaskList;
