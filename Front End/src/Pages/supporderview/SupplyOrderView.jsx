import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SupplierorderContext from "../../context/SupplierorderContext";
import "./supporderview.scss";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";
import axios from "axios";
import Swal from 'sweetalert2';

export default function SupplyOrderView({logOut}) {
  const { supplierorderId } = useParams();
  const navigate = useNavigate();
  const { GetSupplierOrderById } = useContext(SupplierorderContext);
  
  const [supporderdata, setSupporderdata] = useState({
    id: 0,
    supplierId: 0,
    supplierName: "",
    totalQty: 0,
    subTotalPrice: 0,
    shippingCost: 0,
    totalPrice: 0,
    orderStatusId: 0,
    orderStatus: "",
    orderingDate: "2023-04-16T22:50:06.8515743",
    expectedArrivalDate: "2023-04-20T00:50:06.8515703",
    orderedMaterials: [
      {
        materialId: 0,
        materialName: "",
        salesPrice: 0,
        quantity: 0,
        price: 0
      }
    ]
  });

  async function getsupporder() {
    const supplyorder = await GetSupplierOrderById(supplierorderId);
    // console.log("====================================");
    // console.log(supplyorder);
    // console.log("====================================");
    setSupporderdata(supplyorder.data);
  }

  useEffect(() => {
    getsupporder();
  }, []);

  function handleShipped() {
    axios
      .get(
        `https://localhost:44393/api/ChangeSupplierOrderStatusToShipped?orderId=${supplierorderId}`
      )
      .then((res) => {
        setSupporderdata(
          {
            id: supporderdata.id,
            supplierId: supporderdata.supplierId,
            supplierName: supporderdata.supplierName,
            totalQty: supporderdata.totalQty,
            subTotalPrice:  supporderdata.subTotalPrice,
            shippingCost:  supporderdata.shippingCost,
            totalPrice:  supporderdata.totalPrice,
            orderStatusId:  supporderdata.orderStatusId,
            orderStatus: "shipped",
            orderingDate: supporderdata.orderingDate,
            expectedArrivalDate: supporderdata.expectedArrivalDate,
            orderedMaterials: supporderdata.orderedMaterials
          }
        )
        
        Swal.fire({
          icon: 'success',
          title: 'Changed!',
          text: `OrderStatus has been Changed To Shipped.`,
          showConfirmButton: false,
          timer: 1500
          });

              console.log("abc")

          navigate("/supplierorders");
      });
  }
  async function handlefulfilled() {
    await axios
      .get(
        `https://localhost:44393/api/ChangeSupplierOrderStatusToFullfilled?orderId=${supplierorderId}`
      )
      .then((res) => {
setSupporderdata(
  {
            id: supporderdata.id,
            supplierId: supporderdata.supplierId,
            supplierName: supporderdata.supplierName,
            totalQty: supporderdata.totalQty,
            subTotalPrice:  supporderdata.subTotalPrice,
            shippingCost:  supporderdata.shippingCost,
            totalPrice:  supporderdata.totalPrice,
            orderStatusId:  supporderdata.orderStatusId,
            orderStatus: "fullfilled",
            orderingDate: supporderdata.orderingDate,
            expectedArrivalDate: supporderdata.expectedArrivalDate,
            orderedMaterials: supporderdata.orderedMaterials
      
  
  }
)
Swal.fire({
  icon: 'success',
  title: 'Changed!',
  text: `OrderStatus has been Changed To fullfilled.`,
  showConfirmButton: false,
  timer: 1500
  });
      console.log("abc")
         navigate("/supplierorders");
      });
  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="manufactur">
          <div className="manufacturTitleContainer">
            <h1 className="manufacturTitle">Supplier Order</h1>
            <Link to="/supplierorders/newordersupply">
              <button className="manufacturAddButton">Order</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
              <p className="categoryName">
                <span className="spanform">supplierName: </span>
                {supporderdata.supplierName}
              </p>
                <p className="paddorder">
                  <span className="spanform">id: </span>
                  {supporderdata.id}
                </p>
                <p className="paddorder">
                  <span className="spanform">supplierId: </span>
                  {supporderdata.supplierId}
                </p>

                <p className="paddorder">
                  <span className="spanform">totalQty: </span>
                  {supporderdata.totalQty}
                </p>
                <p className="paddorder">
                  <span className="spanform">subTotalPrice: </span>
                  {supporderdata.subTotalPrice}
                </p>
                <p className="paddorder">
                  <span className="spanform">shippingCost: </span>
                  {supporderdata.shippingCost}
                </p>
                <p className="paddorder">
                  <span className="spanform">totalPrice: </span>
                  {supporderdata.totalPrice}
                </p>
                <p className="paddorder">
                  <span className="spanform">orderStatusId: </span>
                  {supporderdata.orderStatusId}
                </p>
                <p className="paddorder">
                  <span className="spanform">orderStatus: </span>
                  {supporderdata.orderStatus}
                </p>
                <p className="paddorder">
                  <span className="spanform">orderingDate: </span>
                  {supporderdata.orderingDate}
                </p>
                <p className="paddorder">
                  <span className="spanform">expectedArrivalDate: </span>
                  {supporderdata.expectedArrivalDate}
                </p>
              </div>
              <h3>Order Status:</h3>
              <div
              style={{ display: "flex", gap: "50px", marginBottom: "20px" }}
              >
              <button className="manufacturEdit1" onClick={handleShipped} 
              style={{color : supporderdata.orderStatus==="pending"?"blue":"lightgray"}} 
              disabled={ supporderdata.orderStatus!=="pending"?true:false}>
              Shipped
              </button>
              <button className="manufacturEdit2" onClick={handlefulfilled}
              style={{color : supporderdata.orderStatus!=="fullfilled"?"blue":"lightgray"}} 
              disabled={ supporderdata.orderStatus==="fullfilled"?true:false}
              >
              fulfilled
              </button>
              </div>
              <hr />
              <h3>Ordered Materials:  </h3>
              <table className="table-striped">
                <thead className="header">
                  <tr>
                    <th>Material-ID</th>
                    <th>Material-Name</th>
                    <th>price Per Unit (Sales Price)</th>
                    <th>quantity</th>
                    <th>price</th>
                  </tr>
                </thead>
                <tbody>
                  {supporderdata.orderedMaterials.map((item) => (
                    <tr key={item.id}>
                      <td>{item.materialId}</td>
                      <td>{item.materialName}</td>
                      <td>{item.salesPrice}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
