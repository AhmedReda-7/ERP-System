import { Link, useParams ,useNavigate} from "react-router-dom";
import "./supplier.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "./../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import SupplierContext from "../../context/SupplierContext";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Supplier({logOut}) {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  const [supplyMatraial, setSupplyMatraial] = useState([]);
  const [price, setPrice] = useState("");
  const { handleupdate, getSupllierById, getSuplliermatrialById } =
    useContext(SupplierContext);
  const [supdata, setSupdata] = useState({
    supplierName: "",
    supplierDescription: "",
    adverageDeliveryTimeInDays: 0,
    phoneNumber: "",
    email: "",
    address: "",
  });
  console.log("====================================");
  console.log(supplierId);
  console.log("====================================");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleupdate(supplierId, supdata);
    // console.log("suppdata",supdata)

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${supdata.supplierName} has been updated.`,
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/supplier");

  };
  const handleChange = (e,matrial) => {
    
    const supplierData = { ...supdata };
    supplierData[e.target.name] = e.target.value;
    setSupdata(supplierData);
    console.log(supdata);
    setPrice(e.target.value);
    matrial.pricePerUnit = e.target.value;
    console.log(price);
  };

  const handleRemoveMatrial = async (matrial) => {
    console.log("====================================");
    console.log("abc");
    const abc = Number(supplierId);
    console.log(typeof abc);

    const deleteMatrial = await axios.delete(
      `https://localhost:44393/api/DeleteSupplingMaterialToSupplier_V3?supplierId=${supplierId}&supplyingMaterialId=${matrial.materialId}`
    );
    getSupplier();
    console.log(deleteMatrial);
    console.log(supplyMatraial);
  };
  async function getSupplier() {
    const supplier = await getSupllierById(supplierId);
    console.log("====================================");
    console.log(supplier);
    console.log("====================================");
    setSupdata(supplier.data);
    const suppliermatrial = await getSuplliermatrialById(supplierId);
    setSupplyMatraial(suppliermatrial.data);
  }

  useEffect(() => {
    getSupplier();
  }, []);
  console.log("====================================");
  console.log(supplierId);
  console.log("====================================");
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="supplier">
          <div className="supplierTitleContainer">
            <h1 className="supplierTitle">Supplier</h1>
            <Link to="/supplier/newsupply">
              <button className="supplierAddButton">Create</button>
            </Link>
          </div>
          <div className="supplierTop">
            <div className="supplierTopLeft">
              <form className="supplierForm" onSubmit={handleSubmit}>
                <div className="supplierFormLeft">
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="supplierName"
                    name="supplierName"
                    value={supdata.supplierName}
                  />
                </div>
                <div className="supplierFormLeft">
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="supplierDescription"
                    name="supplierDescription"
                    value={supdata.supplierDescription}
                  />
                </div>
                <div className="supplierFormLeft">
                  <input
                    type="number"
                    onChange={handleChange}
                    placeholder="adverageDeliveryTimeInDays"
                    name="adverageDeliveryTimeInDays"
                    value={supdata.adverageDeliveryTimeInDays}
                  />
                </div>
                <div className="supplierFormLeft">
                  <input
                    type="number"
                    onChange={handleChange}
                    placeholder="phoneNumber"
                    name="phoneNumber"
                    value={supdata.phoneNumber}
                  />
                </div>
                <div className="supplierFormLeft">
                  <input
                    type="email"
                    onChange={handleChange}
                    placeholder="email"
                    name="email"
                    value={supdata.email}
                  />
                </div>
                <div className="supplierFormLeft">
                  <input
                    type="text"
                    onChange={handleChange}
                    placeholder="address"
                    name="address"
                    value={supdata.address}
                  />
                </div>
                {supplyMatraial.map((item) => (
                  <div
                    className="suppmatrial"
                    key={item.materialId}
                    style={{ display: "flex", gap: "20px" }}
                  >
                    <input type="text" value={item.materialName} />
                    <input
                      type="number"
                      value={item.pricePerUnit}
                      onChange={(e) => handleChange(e, item)}
                      name="price"
                    />
                    <button
                      className="deleteButtonrow"
                      onClick={() => handleRemoveMatrial(item)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button className="supplierAddButton">Update</button>

              </form>
        
            </div>

            <div className="supplierTopRight">
              <div className="supplierInfoTop">
                <p className="supplierName paddp">
                  <span className="spanform">supplierName:</span>{" "}
                  {supdata.supplierName}
                </p>

                <p className="paddp">
                  <span className="spanform">supplierDescription: </span>
                  {supdata.supplierDescription}
                </p>
                <p className="paddp">
                  <span className="spanform">adverageDeliveryTimeInDays: </span>
                  {supdata.adverageDeliveryTimeInDays}
                </p>
                <p className="paddp">
                  <span className="spanform">phoneNumber: </span>
                  {supdata.phoneNumber}
                </p>
                <p className="paddp">
                  <span className="spanform">email: </span>
                  {supdata.email}
                </p>
                <p className="paddp">
                  <span className="spanform">address: </span>
                  {supdata.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
