import "./supplierlist.scss";
import { DataGrid } from "@mui/x-data-grid";
import { supplyColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import axios  from 'axios';
import SupplierContext from "../../context/SupplierContext";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

const SupplierList = ({logOut}) => {

 const {getAllsupplier,data,handleDelete} = useContext(SupplierContext)
useEffect(() => {
 getAllsupplier();
}, []);
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
      
        return (
          
          <div className="cellAction">
            <Link to={"/supplier/view/" + params.row.supplierId} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.supplierId)}
            >
              Delete
            </div>
            <div>
            <Link to={"/supplier/" + params.row.supplierId}>
            <button className="userListEdit">Edit</button>
          </Link>
            </div>
            <div>
            <Link to={"/supplier/newsupplymatrial/" + params.row.supplierId}>
            <button className="userListrow">Suppliers Raw Matrial </button>
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
Add New Supplier
  <Link to="/supplier/newsupply" className="link">
    Add New
  </Link>
</div>
<DataGrid
  className="datagrid"
  getRowId={(row) => row.supplierId}
  rows={data}
  columns={supplyColumns.concat(actionColumn)}
  pageSize={9}
  rowsPerPageOptions={[9]}
  checkboxSelection
/>
</div>
      </div>
    </div>
  );
};

export default SupplierList;
