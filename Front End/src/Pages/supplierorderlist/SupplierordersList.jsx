import "./SupplierordersList.scss";
import { DataGrid } from '@mui/x-data-grid';
import { supporderCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import SupplierorderContext from "../../context/SupplierorderContext";


export default function SupplierordersList({logOut}) {

  const {getAllSupplierorder,data}= useContext(SupplierorderContext)
  //console.log(data);
useEffect(() => {
  getAllSupplierorder();
}, []);




  const columnordersupp = [
   
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          
          <div className="cellAction">
          <Link to={"/supplierorders/view/" +params.row.id} style={{ textDecoration: "none" }}>
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
       Order RawMaterial From Supplier
        <Link to="/supplierorders/newordersupply" className="link">
        Order
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.id}
      rows={data}
      columns={supporderCoulm.concat(columnordersupp)}
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




