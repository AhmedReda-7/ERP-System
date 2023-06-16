import "./employeetrainlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { empltrainColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import axios  from 'axios';
import EmployeeTrainingContext  from "../../context/EmployeeTrainingContext";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

const EmployeeTrainList = ({logOut}) => {
    
 const {getAllEmpTrainning,data,handleDelete} = useContext(EmployeeTrainingContext);
useEffect(() => {
 getAllEmpTrainning();
}, []);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
      
        return (
          
          <div className="cellAction">
            <Link to={"/employeetrain/view/" + params.row.trainnningId} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.trainnningId)}
            >
              Delete
            </div>
            <div>
            <Link to={"/employeetrain/" + params.row.trainnningId}>
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
Add New Employee-Training
  <Link to="/employeetrain/newemployeetrain" className="link">
    Add New
  </Link>
</div>
<DataGrid
  className="datagrid"
  getRowId={(row) => row.trainnningId}
  rows={data}
  columns={empltrainColumns.concat(actionColumn)}
  pageSize={9}
  rowsPerPageOptions={[9]}
  checkboxSelection
/>
</div>
      </div>
    </div>
  );
};

export default EmployeeTrainList;
