import "./EditDistributor.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import DistributorContext from "../../context/DistributorContext";
import Swal from "sweetalert2";

export default function EditDistributor({ logOut }) {
  const { distributorId } = useParams();
  const navigate = useNavigate();
  const {
    handleupdate,
    detailData,
    getDistributorById,
    returnDistributorById,
  } = useContext(DistributorContext);

  const [distdata, setdistdata] = useState({
    distributorName: "",
    phoneNumber: "",
    email: "",
    address: detailData.address,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(distributorId, distdata);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${distdata.distributorName} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/distributor");
  };

  const handleChange = (e) => {
    const distData = { ...distdata };

    distData[e.target.name] = e.target.value;

    setdistdata(distData);
  };

  async function getdist() {
    const dist = await returnDistributorById(distributorId);
    setdistdata(dist.data);
  }

  useEffect(() => {
    getdist();
    getDistributorById(distributorId);
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Distributor</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Distributor Name</label>
              <input
                type="text"
                name="distributorName"
                value={distdata.distributorName}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Phone Number</label>
              <input
                type="int"
                name="phoneNumber"
                value={distdata.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={distdata.email}
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>address</label>
              <input
                type="address"
                name="Address"
                value={distdata.Address}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="addProductButton">
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
