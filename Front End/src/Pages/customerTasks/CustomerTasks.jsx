import "./CustomerTasks.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { customerTaskColum } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import CustomerTaskContext from "../../context/CustomerTaskContext";

export default function CustomerTasks() {
  const { GetAllCustomerTasks, data, handleDelete } = useContext(CustomerTaskContext);

  useEffect(() => {
    GetAllCustomerTasks();
  }, []);

  const customerTaskColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 130,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/customerTask/" + params.row.taskId}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.taskId)}
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
            Task
            <Link to="newCustomerTask" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.taskId}
            rows={data}
            columns={customerTaskColum.concat(customerTaskColumns)}
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
