import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DistributionOrdersContext from "../../context/DistributionOrdersContext";
import "./ViewDistributionOrders.scss";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import axios from "axios";
import Swal from "sweetalert2";

export default function ViewDistributionOrders() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { GetDistributionOrdersById } = useContext(DistributionOrdersContext);

  const [distributorordersdata, setdistributorordersdata] = useState({
    id: 0,
    distributorId: 0,
    distributorName: "",
    totalQty: 0,
    subTotal: 0,
    totalPrice: 0,
    orderStatusId: 0,
    orderStatus: "",
    orderingDate: "2023-04-16T22:50:06.8515743",
    expectedArrivalDate: "2023-04-20T00:50:06.8515703",
    distributionOrderDetails: [
      {
        productId: 0,
        productName: "",
        productSalesPrice: 0,
        qty: 0,
        price: 0,
      },
    ],
  });

  async function getdistributororders() {
    const distributororder = await GetDistributionOrdersById(id);
    setdistributorordersdata(distributororder.data);
  }

  useEffect(() => {
    getdistributororders();
  }, []);

  function handleShipped() {
    axios
      .get(
        `https://localhost:44393/api/ChangeDistributionStatusToShipped?orderId=${id}`
      )
      .then((res) => {
        setdistributorordersdata({
          id: distributorordersdata.id,
          distributorId: distributorordersdata.distributorId,
          distributorName: distributorordersdata.distributorName,
          totalQty: distributorordersdata.totalQty,
          subTotal: distributorordersdata.subTotal,
          shippingCost: distributorordersdata.shippingCost,
          totalPrice: distributorordersdata.totalPrice,
          orderStatusId: distributorordersdata.orderStatusId,
          orderStatus: "shipped",
          orderingDate: distributorordersdata.orderingDate,
          expectedArrivalDate: distributorordersdata.expectedArrivalDate,
          distributionOrderDetails: distributorordersdata.distributionOrderDetails,
        });

        Swal.fire({
          icon: "success",
          title: "Changed!",
          text: `OrderStatus has been Changed To Shipped.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/distributororders");
      });
  }
  async function handlefulfilled() {
    await axios
      .get(
        `https://localhost:44393/api/ChangeDistributionStatusToFullfilled?orderId=${id}`
      )
      .then((res) => {
        setdistributorordersdata({
          id: distributorordersdata.id,
          distributorId: distributorordersdata.distributorId,
          distributorName: distributorordersdata.distributorName,
          totalQty: distributorordersdata.totalQty,
          subTotal: distributorordersdata.subTotal,
          shippingCost: distributorordersdata.shippingCost,
          totalPrice: distributorordersdata.totalPrice,
          orderStatusId: distributorordersdata.orderStatusId,
          orderStatus: "fullfilled",
          orderingDate: distributorordersdata.orderingDate,
          expectedArrivalDate: distributorordersdata.expectedArrivalDate,
          distributionOrderDetails: distributorordersdata.distributionOrderDetails,
        });
        Swal.fire({
          icon: "success",
          title: "Changed!",
          text: `OrderStatus has been Changed To fullfilled.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/distributororders");
      });
  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="manufactur">
          <div className="manufacturTitleContainer">
            <h1 className="manufacturTitle">Distributor Order/ {id}</h1>
            <Link to="/distributororders/neworder">
              <button className="manufacturAddButton">Order</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
                <p className="categoryName">
                  <span className="spanform">Distributor Name: </span>
                  {distributorordersdata.distributorName}
                </p>
                <p className="paddorder">
                  <span className="spanform">id: </span>
                  {distributorordersdata.id}
                </p>
                <p className="paddorder">
                  <span className="spanform">Distributor Id: </span>
                  {distributorordersdata.distributorId}
                </p>

                <p className="paddorder">
                  <span className="spanform">Total qty: </span>
                  {distributorordersdata.totalQty}
                </p>
                <p className="paddorder">
                  <span className="spanform">Sub Total Price: </span>
                  {distributorordersdata.subTotal}
                </p>
                <p className="paddorder">
                  <span className="spanform">Total Price: </span>
                  {distributorordersdata.totalPrice}
                </p>
                <p className="paddorder">
                  <span className="spanform">order Status Id: </span>
                  {distributorordersdata.orderStatusId}
                </p>
                <p className="paddorder">
                  <span className="spanform">Order Status: </span>
                  {distributorordersdata.orderStatus}
                </p>
                <p className="paddorder">
                  <span className="spanform">Ordering Date: </span>
                  {distributorordersdata.orderingDate}
                </p>
                <p className="paddorder">
                  <span className="spanform">Expected Arrival Date: </span>
                  {distributorordersdata.expectedArrivalDate}
                </p>
              </div>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                Order Status:
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "50px",
                  marginBottom: "20px",
                }}
              >
                <button
                  className="manufacturEdit1"
                  onClick={handleShipped}
                  style={{
                    color:
                      distributorordersdata.orderStatus === "pending"
                        ? "blue"
                        : "lightgray",
                  }}
                  disabled={
                    distributorordersdata.orderStatus !== "pending"
                      ? true
                      : false
                  }
                >
                  Shipped
                </button>
                <button
                  className="manufacturEdit2"
                  onClick={handlefulfilled}
                  style={{
                    color:
                      distributorordersdata.orderStatus !== "fullfilled"
                        ? "blue"
                        : "lightgray",
                  }}
                  disabled={
                    distributorordersdata.orderStatus === "fullfilled"
                      ? true
                      : false
                  }
                >
                  fulfilled
                </button>
              </div>
              <hr />
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                Ordered Materials
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <table className="table-striped">
                  <thead className="header">
                    <tr>
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {distributorordersdata.distributionOrderDetails.map(
                      (item) => (
                        <tr key={item.id}>
                          <td>{item.productId}</td>
                          <td>{item.productName}</td>
                          <td>{item.qty}</td>
                          <td>{item.price}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
