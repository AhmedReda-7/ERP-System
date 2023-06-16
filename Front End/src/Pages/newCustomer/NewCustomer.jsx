import "./NewCustomer.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import CustomerContext from "../../context/CustomerContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";//

function NewCustomer() {

  const { GetAllCustomers } = useContext(CustomerContext);
  const navigate = useNavigate();//

  useEffect(() => {
    GetAllCustomers();
  }, []);

  const [customer, setcustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    sex: "",
    age: "",
  });

  const handleInputChange = (e) => {
    const customerData = { ...customer };

    customerData[e.target.name] = e.target.value;

    setcustomer(customerData);
  };

  async function sendData() {
    const customerData = { ...customer };

    const res = await axios.post(
      `https://localhost:44393/api/AddCustomerProfile`,
      customerData
    );
    navigate("/customers");//
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*try {
      setcustomer({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        sex: "",
        age: "",
      });

      Swal.fire({
        position: "middle",
        icon: "success",
        title: "New Customer is added",
        showConfirmButton: false,
        timer: 3000,
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "middle",
        icon: "error",
        title: "Failed to add new Customer",
        showConfirmButton: false,
        timer: 3000,
      });*/
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${customer.fullName} has been Added.`,
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
          <h1 className="addProductTitle">New Customer</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Customer Name</label>
              <input
                type="text"
                name="fullName"
                value={customer.fullName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={customer.email}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Phone Number</label>
              <input
                type="int"
                name="phone"
                value={customer.phone}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>

            <div className="addProductItem">
              <label>Sex</label>
              <div className="radio">
                <input
                  type="radio"
                  name="sex"
                  //id="true"
                  id="1"
                  value="Male"
                  //value="true"
                  onChange={handleInputChange}
                  placeholder=""
                />
                <label htmlFor="true">Male</label>
                <input
                  type="radio"
                  name="sex"
                  //value="false"
                  //id="false"
                  id="0"
                  value="Female"
                  onChange={handleInputChange}
                  placeholder=""
                />
                <label htmlFor="false">Female</label>
              </div>
            </div>


            <div className="addProductItem">
              <label>Age</label>
              <input
                type="int"
                name="age"
                value={customer.age}
                onChange={handleInputChange}
              />
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default NewCustomer;