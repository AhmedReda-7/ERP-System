import "./Template.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { templateCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import TemplateContext from "../../context/TemplateContext";

export default function Template({logOut}) {
  const { getAlltemplate, data, handleDelete } = useContext(TemplateContext);

  useEffect(() => {
    getAlltemplate();
  }, []);

  const columnstemplate = [
    {
      field: "action",

      headerName: "Action",

      width: 200,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/template/view/" + params.row.tempId}>
              <button className="productListEdit">View</button> 
            </Link>
            <Link to={"/template/" + params.row.tempId}>
              <button className="productListEdit">Edit</button> 
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.tempId)}
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
        <Navbar logOut={logOut} />
        <div className="datatable">
          <div className="datatableTitle">
            Templates
            <Link to="/template/newtemplate" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.tempId}
            rows={data}
            columns={templateCoulm.concat(columnstemplate)}
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