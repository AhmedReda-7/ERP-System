import "./NewDistributionOrders.scss";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import DistributorContext from "../../context/DistributorContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NewDistributionOrders() {
  const { getAlldistributor, getDistributorProduct, data, productData } =
    useContext(DistributorContext);
  const navigate = useNavigate();

  const [newDistOrder, setnewDistOrder] = useState({
    id: 0,
    distributorId: 0,
    shippingCost: "",
    productId: 0,
    productName: "",
    price: 0,
    productsOrdered: [
      {
        productId: 0,
        productName: "",
        qty: "",
        price: 0,
      },
    ],
  });

  const newDistOrderOptions = data?.map((dist) => {
    return (
      <option value={dist.distributorId} key={dist.distributorId}>
        Id: {dist.distributorId} -- Name: {dist.distributorName}
      </option>
    );
  });
  const newProductOptions = productData?.map((dist) => {
    return (
      <option value={dist.productId} key={dist.productId}>
        Id: {dist.productId} -- Name: {dist.productName}
      </option>
    );
  });

  useEffect(() => {
    getAlldistributor();
    getDistributorProduct();
  }, [newDistOrder]);

  const deleteRow = (indx) => {
    newDistOrder.productsOrdered.splice(indx, 1);
    const newManu = { ...newDistOrder, data };
    setnewDistOrder(newManu);
  };
  const addProduct = () => {
    newDistOrder.productsOrdered.push({
      productId: "",
      qty: "",
    });

    const newManu = { ...newDistOrder, data };
    setnewDistOrder(newManu);
  };

  async function handleChange(e) {
    const updatedDetails = { ...newDistOrder };
    updatedDetails[e.target.name] = e.target.value;
    setnewDistOrder(updatedDetails);
  }

  async function handleInputChange(e, indx) {
    const { name, value } = e.target;
    const updatedDetails = [...newDistOrder.productsOrdered];
    updatedDetails[indx][name] = value;
    setnewDistOrder({
      ...newDistOrder,
      productsOrdered: updatedDetails,
    });
  }
  async function handleInputChanges(e, indx) {
    const { value } = e.target;
    const productId = parseInt(value);
    const productName = e.target.options[e.target.selectedIndex].text;
    const updatedDetails = [...newDistOrder.productsOrdered];
    updatedDetails[indx].productId = productId;
    updatedDetails[indx].productName = productName;
    setnewDistOrder({
      ...newDistOrder,
      productsOrdered: updatedDetails,
    });
  }

  async function sendData() {
    try {
      const res = await axios.post(
        `https://localhost:44393/api/CreateDistributionOrder`,
        { ...newDistOrder }
      );
      navigate("/distributororders");
    } catch (err) {
      console.log("error ", err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `distribution order has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  console.log(newDistOrder);
  return (
    <div className="newmanufactur">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>New Distribution Order</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", gap: "20px" }}>
                <label htmlFor="distributorId">Distributor</label>
                <select
                  name="distributorId"
                  id="distributorId"
                  onChange={handleChange}
                >
                  {newDistOrderOptions}
                </select>
              </div>

              

              {newDistOrder.productsOrdered.map((material, indx) => (
                <div key={indx}>
                  <div>
                    <label htmlFor="productId">Products</label>
                    <select
                      name="productId"
                      id="productId"
                      onChange={(e) => handleInputChanges(e, indx)}
                    >
                      {newProductOptions}
                    </select>
                  </div>
                  <label>Quantity</label>
                  <input
                    type="number"
                    name="qty"
                    value={material.qty}
                    onChange={(e) => handleInputChange(e, indx)}
                  />
                  <button onClick={() => deleteRow(indx)}>Delete Row</button>
                </div>
              ))}

              <button type="button" onClick={addProduct} className="btnadd">
                Add New Row
              </button>

              <button className="btnsend">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewDistributionOrders;
