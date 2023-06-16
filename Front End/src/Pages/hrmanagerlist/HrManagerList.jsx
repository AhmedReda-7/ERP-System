import "./hrmanagerlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { hrmanagerColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import axios  from 'axios';
import HrMangerContext  from "../../context/HrMangerContext";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

const HrManagerList = ({logOut}) => {
    
 const {getAllhrmanager,data,handleDelete} = useContext(HrMangerContext);
useEffect(() => {
 getAllhrmanager();
}, []);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
      
        return (
          
          <div className="cellAction">
            <Link to={"/hrmanger/view/" + params.row.hrid} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.hrid)}
            >
              Delete
            </div>
            <div>
            <Link to={"/hrmanger/" + params.row.hrid}>
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
Add New HR-Manager
  <Link to="/hrmanger/newhrmanger" className="link">
    Add New
  </Link>
</div>
<DataGrid
  className="datagrid"
  getRowId={(row) => row.hrid}
  rows={data}
  columns={hrmanagerColumns.concat(actionColumn)}
  pageSize={20}
  rowsPerPageOptions={[20]}
  checkboxSelection
/>
</div>
      </div>
    </div>
  );
};

export default HrManagerList;
