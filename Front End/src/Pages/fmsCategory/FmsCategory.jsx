import "./FmsCategory.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { fmsCategoryCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import FmsCategoryContext from "../../context/FmsCategoryContext";

export default function FmsCategory({logOut}) {
  const { getAllcategory, data, handleDelete } = useContext(FmsCategoryContext);

  useEffect(() => {
    getAllcategory();
  }, []);

  const fmsColumnscategory = [
    {
      field: "action",

      headerName: "Action",

      width: 200,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/fmscategory/view/" + params.row.catId}>
              <button className="productListEdit">View</button> 
            </Link>
            <Link to={"/fmscategory/" + params.row.catId}>
              <button className="productListEdit">Edit</button> 
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.catId)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar logOut={logOut}/>
        <div className="datatable">
          <div className="datatableTitle">
            Categories
            <Link to="/fmscategory/fmsnewcategory" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.catId}
            rows={data}
            columns={fmsCategoryCoulm.concat(fmsColumnscategory)}
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
