import "./Customers.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { customerColum } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import CustomerContext from "../../context/CustomerContext";

export default function Customers() {
  const { GetAllCustomers, data, handleDelete } = useContext(CustomerContext);

  useEffect(() => {
    GetAllCustomers();
  }, []);

  const customerColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 130,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/customers/" + params.row.customerId}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.customerId)}
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
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Customer
            <Link to="newCustomer" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.customerId}
            rows={data}
            columns={customerColum.concat(customerColumns)}
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
