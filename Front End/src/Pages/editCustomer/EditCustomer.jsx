import "./EditCustomer.css";
import { useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import CustomerContext from "../../context/CustomerContext";
import { useNavigate } from "react-router-dom";//
import Swal from "sweetalert2";//

export default function EditCustomer() {
  const { customerId } = useParams();
  const navigate = useNavigate();//

  const { handleupdate, GetCustomerById } = useContext(CustomerContext);

  const [customer, setcustomerdata] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    sex: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(customerId, customer);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${customer.fullName} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/customers");//
  };

  const handleChange = (e) => {
    const CustomerData = { ...customer };

    CustomerData[e.target.name] = e.target.value;

    setcustomerdata(CustomerData);
  };

  async function getCustomer() {
    const customer = await GetCustomerById(customerId);

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
          <h1 className="addProductTitle">Edit Customer</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Customer Name</label>
              <input
                type="text"
                name="fullName"
                value={customer.fullName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={customer.email}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Phone Number</label>
              <input
                type="int"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={customer.address}
                onChange={handleChange}
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
                  //value="true"
                  id="1"
                  value="Male"
                  onChange={handleChange}
                  placeholder=""
                />
                <label htmlFor="true">Male</label>
                <input
                  type="radio"
                  name="sex"
                  //value="false"
                  //id="false"
                  value="Female"
                  id="0"
                  onChange={handleChange}
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
                onChange={handleChange}
              />
            </div>
            <button className="addProductButton">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}