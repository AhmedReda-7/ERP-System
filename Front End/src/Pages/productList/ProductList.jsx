import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import AllproductContext from "../../context/AllproductContext";


export default function ProductList({logOut}) {

  const {getAllproduct,data,handleDelete}= useContext(AllproductContext)
useEffect(() => {
  getAllproduct();
}, []);




  const columnsproduct = [
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          
          <div>
            <Link to={"/products/" + params.row.productId}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.productId)}
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
        Add New Product
        <Link to="/products/newproduct" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.productId}
      rows={data}
      columns={productCoulm.concat(columnsproduct)}
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




