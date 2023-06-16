import "./Journals.css";
import { DataGrid } from "@mui/x-data-grid";
import { journalCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import JournalContext from "../../context/JournalContext";

export default function Journals({logOut}) {
  const { getAlljournal, data } = useContext(JournalContext);

  useEffect(() => {
    getAlljournal();
  }, []);

  const columnsjournal = [
    {
      field: "action",

      headerName: "Action",

      width: 70,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/journals/" + params.row.jeid}>
              <button className="productListEdit">Edit</button> 
            </Link>
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
            Journals
            <Link to="/journals/newjournal" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.jeid}
            rows={data}
            columns={journalCoulm.concat(columnsjournal)}
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
