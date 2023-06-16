import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ManufactoringContext from "../../context/ManufactoringContext";
import "./manufacureview.scss";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";
import axios from "axios";
import Swal from 'sweetalert2';

export default function ManufactureView({logOut}) {
  const { manufacturId } = useParams();
  const navigate = useNavigate();
  const { GetManfacturingOrderById } = useContext(ManufactoringContext);
  
  const [manufacturdata, setManufacturedata] = useState({
    productManufacturedId: 0,
    qtyToManufacture: 0,
    manufacturingCost: 0,
    startingDate: "2023-03-27T20:46:30.541Z",
    id: 0,
    productManufacturedName: "",
    finishingDate: "2023-03-27T20:46:30.541Z",
    manufacturingStatus: "",
    manufacturingOrderDetails: [
      {
        rawMaterialId: 0,
        rawMaterialName: "",
        rawMaterialQtyUsed: 0,
      },
    ],
  });

  async function getmanufacture() {
    const manufacture = await GetManfacturingOrderById(manufacturId);
    // console.log("====================================");
    // console.log(manufacture);
    // console.log("====================================");
    setManufacturedata(manufacture.data);
  }

  useEffect(() => {
    getmanufacture();
  }, []);
  
  function handleShipped() {
    axios
      .get(
        `https://localhost:44393/api/ChangeManufacturingStatusToShippedToInventory?orderId=${manufacturId}`
      )
      .then((res) => {
        setManufacturedata(
          {
            productManufacturedId: manufacturdata.productManufacturedId,
            qtyToManufacture: manufacturdata.qtyToManufacture,
            manufacturingCost: manufacturdata.manufacturingCost,
            startingDate: manufacturdata.startingDate,
            id:  manufacturdata.id,
            productManufacturedName:  manufacturdata.productManufacturedName,
            finishingDate:  manufacturdata.finishingDate,
            manufacturingStatus: "ShippedToInventory",
            manufacturingOrderDetails: manufacturdata.manufacturingOrderDetails
          }
        )

        Swal.fire({
          icon: 'success',
          title: 'Changed!',
          text: `manufacturingStatus has been Changed To ShippedToInventory.`,
          showConfirmButton: false,
          timer: 1500
          });


              console.log("abc")

         navigate("/manufactur");
      });
  }
  async function handleManufacture() {
    await axios
      .get(
        `https://localhost:44393/api/ChangeManufacturingStatusToManufacturing?orderId=${manufacturId}`
      )
      .then((res) => {
setManufacturedata(
  {
    productManufacturedId: manufacturdata.productManufacturedId,
    qtyToManufacture: manufacturdata.qtyToManufacture,
    manufacturingCost: manufacturdata.manufacturingCost,
    startingDate: manufacturdata.startingDate,
    id:  manufacturdata.id,
    productManufacturedName:  manufacturdata.productManufacturedName,
    finishingDate:  manufacturdata.finishingDate,
    manufacturingStatus: "Manufacturing",
    manufacturingOrderDetails: manufacturdata.manufacturingOrderDetails
      
  
  }
)
Swal.fire({
icon: 'success',
title: 'Changed!',
text: `manufacturingStatus has been Changed To Manufacturing.`,
showConfirmButton: false,
timer: 1500
});

      console.log("abc")
        navigate("/manufactur");
      });
  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="manufactur">
          <div className="manufacturTitleContainer">
            <h1 className="manufacturTitle">Manufacturing</h1>
            <Link to="/manufactur/newmanufactur">
              <button className="manufacturAddButton">Create</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
                <p className="categoryName">
                  <span className="spanform">productManufacturedId: </span>
                  {manufacturdata.productManufacturedId}
                </p>
                <p className="paddorder">
                  <span className="spanform">productManufacturedName: </span>
                  {manufacturdata.productManufacturedName}
                </p>

                <p className="paddorder">
                  <span className="spanform">qtyToManufacture: </span>
                  {manufacturdata.qtyToManufacture}
                </p>
                <p className="paddorder">
                  <span className="spanform">manufacturingCost: </span>
                  {manufacturdata.manufacturingCost}
                </p>
                <p className="paddorder">
                  <span className="spanform">manufacturId: </span>
                  {manufacturdata.id}
                </p>
                <p className="paddorder">
                  <span className="spanform">startingDate: </span>
                  {manufacturdata.startingDate}
                </p>
                <p className="paddorder">
                  <span className="spanform">finishingDate: </span>
                  {manufacturdata.finishingDate}
                </p>
                <p className="paddorder">
                  <span className="spanform">manufacturingStatus: </span>
                  {manufacturdata.manufacturingStatus}
                </p>
              </div>
              <h3>Manufacturing Status:</h3>
              <div
                style={{ display: "flex", gap: "50px", marginBottom: "20px" }}
              >
                <button className="manufacturEdit1" onClick={handleManufacture} 
                style={{color : manufacturdata.manufacturingStatus==="Pending"?"blue":"lightgray"}} 
                disabled={ manufacturdata.manufacturingStatus!=="Pending"?true:false}>
                  Manufacturing
                </button>
                <button className="manufacturEdit2" onClick={handleShipped}
                style={{color : manufacturdata.manufacturingStatus!=="ShippedToInventory"?"blue":"lightgray"}} 
                disabled={ manufacturdata.manufacturingStatus==="ShippedToInventory"?true:false}
                >
                  ShippedToInventory
                </button>
              </div>
              <hr />
              <h3>Raw Matrial Used: </h3>
              <table className="table-striped">
                <thead className="header">
                  <tr>
                    <th>Material-ID</th>
                    <th>Material-Name</th>
                    <th>QTY</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturdata.manufacturingOrderDetails.map((item) => (
                    <tr key={item.id}>
                      <td>{item.rawMaterialId}</td>
                      <td>{item.rawMaterialName}</td>
                      <td>{item.rawMaterialQtyUsed}</td>
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
