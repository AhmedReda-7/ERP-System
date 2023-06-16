import "./NewDistributor.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function NewDistributor({ logOut }) {
  const [distributor, setdistributor] = useState({
    distributorName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const distributorData = { ...distributor };
    distributorData[e.target.name] = e.target.value;

    setdistributor(distributorData);
  };

  async function sendData() {
    const distributorData = { ...distributor };

    const res = await axios.post(
      `https://localhost:44393/api/AddNewDistributor`,
      distributorData
    );
    navigate("/distributor");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `distributor has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">New Distributor</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Distributor Name</label>
              <input
                type="text"
                name="distributorName"
                value={distributor.distributorName}
                onChange={handleInputChange}
              />
            </div>
            <div className="addProductItem">
              <label>Phone Number</label>
              <input
                type="int"
                name="phoneNumber"
                value={distributor.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={distributor.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="addProductItem">
              <label>Address</label>
              <input
                type="address"
                name="address"
                value={distributor.address}
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

export default NewDistributor;
