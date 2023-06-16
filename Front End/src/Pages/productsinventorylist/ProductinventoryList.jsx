import "./productinventorylist.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productinventoryCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from '../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import ProductInventoryContext from "../../context/ProductInventoryContext";


export default function ProductinventoryList({logOut}) {

  const {getProductInventory,data,handleDelete} = useContext(ProductInventoryContext)
useEffect(() => {
  getProductInventory();
}, []);
 



  const columnsproductinventory = [
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
       
        return (
          
          <div>
            <Link to={"/productsinventory/" + params.row.productId}>
              <button className="ProductinventoryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="categoryListDelete"
              onClick={() => handleDelete(params.row.productId
                )}
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
        Add New ProductInventory
        <Link to="/productsinventory/newproductinventory" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.productId}
      rows={data}
      columns={productinventoryCoulm.concat(columnsproductinventory)}
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




