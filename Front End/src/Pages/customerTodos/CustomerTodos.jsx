import "./CustomerTodos.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { customerTodoColum } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import CustomerTodoContext from "../../context/CustomerTodoContext";

export default function CustomerTodos() {
  const { GetAllCustomerTodos, data, handleDelete } = useContext(CustomerTodoContext);

  useEffect(() => {
    GetAllCustomerTodos();
  }, []);

  const customerTodoColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 130,

      renderCell: (params) => {
        return (
          <div>
            <Link to={"/customerTodos/" + params.row.toDoListId}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.toDoListId)}
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
            Todo List
            <Link to="newCustomerTodo" className="link">
              Add New
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.toDoListId}
            rows={data}
            columns={customerTodoColum.concat(customerTodoColumns)}
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
