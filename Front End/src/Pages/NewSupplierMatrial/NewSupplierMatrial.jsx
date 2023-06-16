import "./newSupplierMatrial.scss";
import Sidebar from "./../../Components/sidebar/Sidebar";
import Navbar from "./../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

import axios from "axios";
import ProductInventoryContext from "../../context/ProductInventoryContext";
import RowMatrialSupply from "./RowMatrialSupply/RowMatrialSupply";
import SupplierContext from "../../context/SupplierContext";

function NewSupplierMatrial({ title ,inputs,logOut}) {
  console.log(document.getElementById("form"));
  const navigate = useNavigate();

  const [file, setFile] = useState("");
  const { getProductInventory  } = useContext(ProductInventoryContext);
  const { getSuplliermatrialById} = useContext(SupplierContext);
  const { suppliermatrialId } = useParams();
console.log("current id is",suppliermatrialId)
const [viewsppmatrial ,setViewsppmatrial] =useState([]);
  const [supplyMatraial, setSupplyMatraial] = useState({
    supplyingMaterialDetails: [
      {
        materialId: "",
        pricePerUnit: ""
      },
    ],
  });
  

  useEffect(() => {
    getProductInventory();
    const tomamkegetSuplliermatrialByIdasync = async () =>
    {
     const res= await getSuplliermatrialById(suppliermatrialId);
     console.log(res);
      // console.log(getSuplliermatrialById(suppliermatrialId))
      setViewsppmatrial(res.data);

    }
    
    
    tomamkegetSuplliermatrialByIdasync()
    
  }, [supplyMatraial]);





  const deleteRow = (indx) => {
    const data = supplyMatraial;
    data.supplyingMaterialDetails.splice(indx, 1);
    const newManu = { ...supplyMatraial, data };
    setSupplyMatraial(newManu);
  };
  const addMaterial = () => {
    const data = supplyMatraial;
    data.supplyingMaterialDetails.push({
      materialId: "",
      pricePerUnit: "",
    });

    const newManu = { ...supplyMatraial, data };
    setSupplyMatraial(newManu);
  };

  const handleInputChange = (e) => {
    const supplyMatraialData = { ...supplyMatraial };
    supplyMatraialData[e.target.name] = e.target.value;

    setSupplyMatraial(supplyMatraialData);
  };

  async function sendData(id) {
    try {
      const res = await axios.post(
        `https://localhost:44393/api/AddNewSupplyingMaterialToSupplier?supplierId=${id}`,
        supplyMatraial
      );
      navigate("/supplier");

      console.log(res);

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("error ", err);
    }

    console.log(supplyMatraial);
    // console.log(res);
    // const manufacturData = { ...manufactur };

    // const res = await axios.post (`https://localhost:44393/api/CreateManufacturingOrder`,manufacturData)

    // console.log(manufacturData);
    // console.log(res);
    // console.log("====================================");
  }

  const handleSubmit = (e) => {
     e.preventDefault();
// console.log(id)
    sendData(suppliermatrialId);
    
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `supplyMatraial has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });
  };

  const renderedRowMaterials = supplyMatraial.supplyingMaterialDetails.map(
    (material, indx) => (
      <RowMatrialSupply
        key={indx}
        indx={indx}
        supplyMatraial={supplyMatraial}
        setSupplyMatraial={setSupplyMatraial}
        material={material}
        deleteRow={deleteRow}
      />
    )
  );

  return (
    <div className="newmanufactur">
      <Sidebar />
      <div className="newContainer">
      <Navbar logOut={logOut}/>
      <div className="top">
          <h1>{title}</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
          <table>
          <thead>
          <th>material Id</th>
          <th>material Name</th>
          <th>price Per Unit</th>
          </thead>
          <tbody>
          {
            viewsppmatrial.map(item =>
            <tr key={item.id}>
            <td>{item.materialId}</td>
            <td>{item.materialName}</td>
            <td>{item.pricePerUnit}</td>
            </tr>
            )}
          
          </tbody>
          </table>
            <form id="form">
           
              {renderedRowMaterials}
              <button type="button" onClick={addMaterial} className="btnadd">
                Add Row Material
              </button>
              
              <button className="btnsend" onClick={handleSubmit}>Send</button>
              </form>
              
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewSupplierMatrial;
