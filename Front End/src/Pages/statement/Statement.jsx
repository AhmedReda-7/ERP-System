import "./Statement.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { statementCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import StatementContext from "../../context/StatementContext";

export default function Statement({logOut}) {
  const { getAllstatement, data, handleDelete } = useContext(StatementContext);

  useEffect(() => {
    getAllstatement();
  }, []);

  const columnsstatement = [
    {
      field: "action",
      headerName: "Action",
      width: 170,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/statement/view/" + params.row.staId}>
              <button className="productListEdit">View</button>
            </Link>
            <Link to={"/statement/" + params.row.staId}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.staId)}
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
            Statements
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.staId}
            rows={data}
            columns={statementCoulm.concat(columnsstatement)}
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