import "./NewCustomerTask.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import CustomerTaskContext from "../../context/CustomerTaskContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";//

function NewCustomerTask() {

  const { GetAllCustomerTasks } = useContext(CustomerTaskContext);
  const navigate = useNavigate();//

  useEffect(() => {
    GetAllCustomerTasks();
  }, []);

  const [customer, setcustomer] = useState({
    customerId: "",
    taskName: "",
    taskDate: "",
    taskDesc: "",
  });

  const handleInputChange = (e) => {
    const customerData = { ...customer };

    customerData[e.target.name] = e.target.value;

    setcustomer(customerData);
  };

  async function sendData() {
    const customerData = { ...customer };

    const res = await axios.post(
      `https://localhost:44393/api/AddNewTaskForCustomer`,
      customerData
    );
    navigate("/customerTask");//
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*try {
      setcustomer({
        customerId: "",
        taskName: "",
        taskDate: "",
        taskDesc: "",
      });

      Swal.fire({
        position: "middle",
        icon: "success",
        title: "New Customer Task Is Added",
        showConfirmButton: false,
        timer: 3000,
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Failed To Add New Customer Task",
        showConfirmButton: false,
        timer: 3000,
      });
    }*/
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${customer.taskName} has been Added.`,
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
          <h1 className="addProductTitle">New Task</h1>
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
              <label>Task Name</label>
              <input
                type="text"
                name="taskName"
                value={customer.taskName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Task Date</label>
              <input
                type="date"
                name="taskDate"
                value={customer.taskDate}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Task Description</label>
              <input
                type="text"
                name="taskDesc"
                value={customer.taskDesc}
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

export default NewCustomerTask;