import "./NewCustomerTodo.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import CustomerTodoContext from "../../context/CustomerTodoContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";//

function NewCustomerTodo() {

  const { GetAllCustomerTodos } = useContext(CustomerTodoContext);
  const navigate = useNavigate();//

  useEffect(() => {
    GetAllCustomerTodos();
  }, []);

  const [customer, setcustomer] = useState({
    toDoListName: "",
    toDoListDesc: "",
    customerId: "",
  });

  const handleInputChange = (e) => {
    const customerData = { ...customer };

    customerData[e.target.name] = e.target.value;

    setcustomer(customerData);
  };

  async function sendData() {
    const customerData = { ...customer };

    const res = await axios.post(
      `https://localhost:44393/api/AddNewToDolistForCustomer`,
      customerData
    );
    navigate("/customerTodos");//
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*try {
      setcustomer({
        toDoListName: "",
        toDoListDesc: "",
        customerId: "",
      });

      Swal.fire({
        position: "middle",
        icon: "success",
        title: "New Customer ToDo List is added",
        showConfirmButton: false,
        timer: 3000,
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Failed to add new Customer Todo List",
        showConfirmButton: false,
        timer: 3000,
      });
    }*/
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${customer.toDoListName} has been Added.`,
      showConfirmButton: false,
      timer: 1500
    });
    sendData();
  };


  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="container">
          <h1 className="addProductTitle">New Todo List</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Customer Id</label>
              <input
                type="int"
                name="customerId"
                value={customer.customerId}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Todo List Name</label>
              <input
                type="text"
                name="toDoListName"
                value={customer.toDoListName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Todo List Description</label>
              <input
                type="text"
                name="toDoListDesc"
                value={customer.toDoListDesc}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewCustomerTodo;