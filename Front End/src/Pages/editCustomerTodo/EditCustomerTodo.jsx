import "./EditCustomerTodo.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import CustomerTodoContext from "../../context/CustomerTodoContext";
import { useNavigate } from "react-router-dom";//
import Swal from "sweetalert2";//

export default function EditCustomerTodo() {
  const { toDoListId } = useParams();//
  const navigate = useNavigate();//

  const { handleupdate, GetCustomerTodoById } = useContext(CustomerTodoContext);

  const [customer, setcustomerdata] = useState({
    toDoListName: "",
    toDoListDesc: "",
    customerId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(toDoListId, customer);//
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${customer.toDoListName} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/customerTodos");//
  };

  const handleChange = (e) => {
    const CustomerData = { ...customer };

    CustomerData[e.target.name] = e.target.value;

    setcustomerdata(CustomerData);
  };

  async function getCustomer() {
    const customer = await GetCustomerTodoById(toDoListId);//

    setcustomerdata(customer.data);
  }

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">Edit Todo List</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Customer Id</label>
              <input
                type="int"
                name="customerId"
                value={customer.customerId}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Todo List Name</label>
              <input
                type="text"
                name="toDoListName"
                value={customer.toDoListName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Todo List Description</label>
              <input
                type="text"
                name="toDoListDesc"
                value={customer.toDoListDesc}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <button className="addProductButton">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}