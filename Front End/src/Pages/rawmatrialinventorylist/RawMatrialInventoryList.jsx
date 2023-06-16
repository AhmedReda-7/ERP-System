
import "./rawmatrialinventorylist.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { rawmatrialinventoryCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from '../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import RawMatrialInventoryContext from "../../context/RawMatrialInventoryContext";

export default function RawMatrialInventoryList({logOut}) {
  const {getAllRawMatrialInventory,data,handleDelete} = useContext(RawMatrialInventoryContext)
  
useEffect(() => {
  getAllRawMatrialInventory();
}, []);
  



  const columnsrawmatrialinventory = [
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          
          <div>
            <Link to={"/rawmatrialinventory/" + params.row.materialId}>
              <button className="rawmatrialinventoryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="rawmatrialinventoryListDelete"
              onClick={() => handleDelete(params.row.materialId)}
            />
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
        Add New Raw Material Inventory
        <Link to="/rawmatrialinventory/newrawmatrialinventory" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.materialId}
      rows={data}
      columns={rawmatrialinventoryCoulm.concat(columnsrawmatrialinventory)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
      disableSelectionOnClick
/>
    </div>
  </div>
  </div>
  );
}






