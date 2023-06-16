import "./ManufacturList.scss";
import { DataGrid } from '@mui/x-data-grid';
import { manufacturCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import ManufactoringContext from "../../context/ManufactoringContext";


export default function ManufacturList({logOut}) {
// const refresh = () => window.location.reload(true);
  const {getAllmanufactur,data}= useContext(ManufactoringContext)
  //console.log(data);
useEffect(() => {
  getAllmanufactur();
}, []);




  const columnmanufactur = [
   
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          
          <div className="cellAction">
          <Link to={"/manufactur/view/" +params.row.id} style={{ textDecoration: "none" }}>
          <div className="viewButton">VIEW and Change Status</div>
        </Link>
       
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
        Add New Manufacturing
        <Link to="/manufactur/newmanufactur" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.id}
      rows={data}
      columns={manufacturCoulm.concat(columnmanufactur)}
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




