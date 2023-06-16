import React, { useContext, useEffect, useState } from "react";
import RawMatrialContext from "../../../context/RawMatrialContext";
import "./rowmatrial.css";
import SupplierContext from "../../../context/SupplierContext";
export default function RowMaterial({
  supporder,
  setSupporder,
  indx,
  material,
  deleteRow,
  children,
  price
}) {

  const { getAllRawMatrial } =
    useContext(RawMatrialContext);
    const [supplyMatraial, setSupplyMatraial] = useState([]);

  const [rowInputs, setrowInputs] = useState({ materialId: "", qty: "" });
  const {getSupllierById ,getSuplliermatrialById} = useContext (SupplierContext);


  useEffect(() => {
    getAllRawMatrial();
  }, []);
  useEffect(() => {
    console.log('====================================');
    console.log(rowInputs);
    console.log('====================================');
  }, [rowInputs]);

  

 
  const handleChange = async (e)  => {
    const newVal =  rowInputs ;
    newVal[e.target.name] = Number(e.target.value);
    const supplier = await getSuplliermatrialById(localStorage.getItem("selectedId"));
    console.log(supplier.data)

    setSupplyMatraial(supplier.data)
    console.log(typeof(localStorage.getItem("selectedId")))
    setrowInputs(newVal);
    
// for (let item of supplyMatraial )
// {
//  console.log('====================================');
//  console.log();
//  console.log('====================================');
// }

    let orderedMaterials = [...supporder.orderedMaterials];
    orderedMaterials[indx] = rowInputs;

    const newManuf = { ...supporder, orderedMaterials };

    setSupporder(prev => ({...prev , ...newManuf}));

    // console.log('====================================');
    // console.log(rowInputs);
    // console.log('====================================');
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <select name="materialId" onChange={handleChange} defaultValue="">
        <option disabled value="">
          select row material{" "}
        </option>
        {children}
      </select>
<span></span>
      <input
        type="text"
        name="qty"
        onChange={handleChange}
        value={rowInputs.qty}
        placeholder="Quantity"
      />

      <button className="deleteButtonrow" onClick={()=>deleteRow(indx)}>Remove Row</button>
    </div>
  );
}
