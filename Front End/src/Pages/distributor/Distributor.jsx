import "./Distributor.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { distributorCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import DistributorContext from "../../context/DistributorContext";

export default function Distributor({logOut}) {
  const { getAlldistributor, data, handleDelete } = useContext(DistributorContext);

  useEffect(() => {
    getAlldistributor();
  }, []);

  const columnsdistributor = [
    {
      field: "action",

      headerName: "Action",

      width: 210,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/distributor/" + params.row.distributorId}>
              <button className="productListEdit">Edit</button> 
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.distributorId)}
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
            Distributor
            <Link to="/distributor/newdistributor" className="link">
              Add New Distributor
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.distributorId}
            rows={data}
            columns={distributorCoulm.concat(columnsdistributor)}
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
