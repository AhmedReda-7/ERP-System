import "./newsupplierorder.scss";
import Sidebar from "./../../Components/sidebar/Sidebar";
import Navbar from "./../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SupplierContext from "../../context/SupplierContext";
import RowMaterial from "./RowMaterial/RowMaterial";
import RawMatrialContext from "../../context/RawMatrialContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function NewSupplierorder({ inputs, title,logOut }) {
  const [file, setFile] = useState("");
  const { getAllsupplier, data } = useContext(SupplierContext);
  const { data: allRowMaterial } = useContext(RawMatrialContext);
  const {getSupllierById ,getSuplliermatrialById} = useContext (SupplierContext);
  const [supplyMatraial, setSupplyMatraial] = useState([]);
  const navigate = useNavigate();


  const [supporder, setSupporder] = useState({
    id: 0,
    supplierId: 0,  
    shippingCost: 0,
    orderedMaterials: [
      {
        materialId: 0,
        materialName: "",
        quantity: 0,
        price: 0
      }
    ]
  });
  const supporderOptions = data?.map((supp) => {
    return (
      <option value={supp.supplierId} key={supp.supplierId}>
        {supp.supplierId} - {supp.supplierName}
      </option>
    );
  });
  const  rowMaterialOptions = allRowMaterial?.map((material) => (
    <option value={material.materialId} key={material.materialId}>
      {material.materialId} - {material.materialName}{" "}
    </option>
  ));

// for (let item of supplyMatraial )
// {
//   if(item && item.materialName === localStorage.getItem("selectValue"))
//   {
//     setSelectedPrice (item.pricePerUnit);
//     console.log("fatna",item.pricePerUnit)
//      break;

//   }
// }




  useEffect(() => {
    getAllsupplier();
  }, [supporder]);




  const deleteRow = (indx) => {
    const data = supporder;
    data.orderedMaterials.splice(indx, 1);
    const newManu = { ...supporder, data };
    setSupporder(newManu);
  };
  const addMaterial = () => {
    const data = supporder;
    data.orderedMaterials.push({
      materialId: "",
      qty: "",
    });

    const newManu = { ...supporder, data };
    setSupporder(newManu);
  };

  async function handleInputChange (e)  {
    const supporderData = { ...supporder };
    // const cost =supporderData.shippingCost
    supporderData[e.target.name] = e.target.value;
    // console.log('====================================');
    // console.log(e.target.value);
    // console.log('====================================');
    // const supplier = await getSuplliermatrialById(e.target.value);
    // // localStorage.setItem("selectedId",e.target.value);
    // // console.log(supplier.data)
    // setSupplyMatraial(supplier.data);
    console.log(supporderData.shippingCost);
    setSupporder(supporderData);
    
  };
  async function handleInputChanges (e)  {
    const supporderData = { ...supporder };
    supporderData[e.target.name] = e.target.value;
    console.log('====================================');
    console.log(e.target.value);
    console.log('====================================');
    const supplier = await getSuplliermatrialById(e.target.value);
    localStorage.setItem("selectedId",e.target.value);
    console.log(supplier.data)
    setSupplyMatraial(supplier.data);
    setSupporder(supporderData);
    
  };

  async function sendData(id,cost) {
    try {
      const res = await axios.post(
        `https://localhost:44393/api/OrderRawMaterialFromSupplier?supplierId=${id}&shippingCost=${cost}`,
        supporder.orderedMaterials
      );
      navigate("/supplierorders");

      // console.log(res);

      // const data = await res.json();/*  */
      // console.log(data);
    } catch (err) {
      console.log("error ", err);
    }
    console.log(typeof(id),typeof(cost));
    console.log(supporder.orderedMaterials.materialId,supporder.orderedMaterials.quantity);

    console.log(supporder);
    // console.log(res);
    // const manufacturData = { ...manufactur };

    // const res = await axios.post (`https://localhost:44393/api/CreateManufacturingOrder`,manufacturData)

    // console.log(manufacturData);
    // console.log(res);
    // console.log("====================================");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData(supporder.supplierId,supporder.shippingCost);
    
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `Supplier order has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });
  };

  
  const renderedRowMaterials = supporder.orderedMaterials.map(
    (material, indx) => (
      <RowMaterial
        key={indx}
        indx={indx}
        supporder={supporder}
        setSupporder={setSupporder}
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
            <form onSubmit={handleSubmit}>
              <div className="" style={{ display: "flex", gap: "20px" }}>
                <label htmlFor="supplierId">
                choose Supplier
                </label>
                <select
                  name="supplierId"
                  id="supplierId"
                  onChange={handleInputChanges}
                >
                  {supporderOptions}
                </select>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              
              {supporder.orderedMaterials.map(
                (material, indx) => (
                  <RowMaterial
                    key={indx}
                    indx={indx}
                    supporder={supporder}
                    setSupporder={setSupporder}
                    material={material}
                    deleteRow={deleteRow}
                  >
                  {supplyMatraial.map (item=>
                    
                    
                  <option key={item.materialId} value={item.materialId}> {"materialName: "}{item.materialName} - {"pricePerUnit: "}{item.pricePerUnit}{"  $"}</option> 
                
                    
                    
                    )}
                    {
                    // {supplyMatraial.map(item =>
                  
                    //       <span> {item.pricePerUnit}  </span>
                    // )}
                    }
                  </RowMaterial>
                )
              )}
      
              
            
              <button type="button" onClick={addMaterial} className="btnadd">
                Add Row Material
              </button>

              <button className="btnsend">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewSupplierorder;
