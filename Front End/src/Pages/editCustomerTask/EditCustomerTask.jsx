import "./EditCustomerTask.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import CustomerTaskContext from "../../context/CustomerTaskContext";
import { useNavigate } from "react-router-dom";//
import Swal from "sweetalert2";//

export default function EditCustomerTask() {
  const { taskId } = useParams();
  const navigate = useNavigate();//

  const { handleupdate, GetCustomerTaskById } = useContext(CustomerTaskContext);

  const [customer, setcustomerdata] = useState({
    customerId: "",
    taskName: "",
    taskDate: "",
    taskDesc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(taskId, customer);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${customer.taskName} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/customerTask");
  };

  const handleChange = (e) => {
    const CustomerData = { ...customer };

    CustomerData[e.target.name] = e.target.value;

    setcustomerdata(CustomerData);
  };

  async function getCustomer() {
    const customer = await GetCustomerTaskById(taskId);

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
          <h1 className="addProductTitle">Edit Task</h1>
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
              <label>Task Name</label>
              <input
                type="text"
                name="taskName"
                value={customer.taskName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Task Date</label>
              <input
                type="date"
                name="taskDate"
                value={customer.taskDate}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Task Description</label>
              <input
                type="text"
                name="taskDesc"
                value={customer.taskDesc}
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