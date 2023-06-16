import "./Accounts.css";
import { DataGrid } from "@mui/x-data-grid";
import { accountCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import AccountContext from "../../context/AccountContext";

export default function Accounts({logOut}) {
  const { getAllaccount, data} = useContext(AccountContext);

  useEffect(() => {
    getAllaccount();
  }, []);

  const columnsaccount = [
    {
      field: "action",

      headerName: "Action",

      width: 150,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/accounts/view/" + params.row.accId}>
              <button className="productListEdit">View</button> 
            </Link>
            <Link to={"/accounts/" + params.row.accId}>
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
            Accounts
            <Link to="/accounts/newaccount" className="link">
              Add New Account
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.accId}
            rows={data}
            columns={accountCoulm.concat(columnsaccount)}
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