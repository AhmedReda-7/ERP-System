
import "./rawmatriallist.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { rawmatrialCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from '../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import RawMatrialContext from "../../context/RawMatrialContext";


export default function RawMatrialList({logOut}) {
  const {data, getAllRawMatrial,handleDelete} = useContext(RawMatrialContext)
  
useEffect(() => {
  getAllRawMatrial();
}, []);




  const columnsrawmatrial = [
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          
          <div>
            <Link to={"/rawmatrial/" + params.row.materialId}>
              <button className="rawmatrialListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="rawmatrialListDelete"
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
        Add New RawMaterial
        <Link to="/rawmatrial/newrawmatrial" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.materialId}
      rows={data}
      columns={rawmatrialCoulm.concat(columnsrawmatrial)}
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






