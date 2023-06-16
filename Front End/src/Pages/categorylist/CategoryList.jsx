import "./categorylist.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { categoryCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from '../../Components/navbar/Navbar';
import { useState ,useEffect,useContext} from "react";
import axios  from 'axios';
import CategoryContext from "../../context/CategoryContext";


export default function CategoryList({logOut}) {

  const {getAllcategory,data,handleDelete} = useContext(CategoryContext)
useEffect(() => {
  getAllcategory();
}, []);




  const columnscategory = [
  
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
      
        return (
          
          <div>
            <Link to={"/category/" + params.row.categoryId}>
              <button className="categoryListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="categoryListDelete"
              onClick={() => handleDelete(params.row.categoryId
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
    <Navbar logOut={logOut}/>      <div className="datatable">
      <div className="datatableTitle">
        Add New Category
        <Link to="/category/newcategory" className="link">
          Add New
        </Link>
      </div>
      
      <DataGrid 
      className="datagrid"
      getRowId={(row) => row.categoryId}
      rows={data}
      columns={categoryCoulm.concat(columnscategory)}
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




