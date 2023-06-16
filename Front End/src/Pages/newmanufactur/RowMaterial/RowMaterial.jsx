import React, { useContext, useEffect, useState } from "react";
import RawMatrialContext from "../../../context/RawMatrialContext";
import "./rowmatrial.css";
export default function RowMaterial({
  manufactur,
  setManufactur,
  indx,
  material,
  deleteRow
  
}) {

  const { data: allRowMaterial, getAllRawMatrial } =
    useContext(RawMatrialContext);

  const [rowInputs, setrowInputs] = useState({ materialId: "", qty: "" });

  useEffect(() => {
    getAllRawMatrial();
  }, []);
  useEffect(() => {
    console.log('====================================');
    console.log(rowInputs);
    console.log('====================================');
  }, [rowInputs]);

  

  const rowMaterialOptions = allRowMaterial?.map((material) => (
    <option value={material.materialId} key={material.materialId}>
      {material.materialId} - {material.materialName}{" "}
    </option>
  ));

  const handleChange = (e) => {
    const newVal =  rowInputs ;
    newVal[e.target.name] = Number(e.target.value);

    setrowInputs(newVal);

    let rawMaterialsUsed = [...manufactur.rawMaterialsUsed];
    rawMaterialsUsed[indx] = rowInputs;

    const newManuf = { ...manufactur, rawMaterialsUsed };

    setManufactur(prev => ({...prev , ...newManuf}));

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
        {rowMaterialOptions}
      </select>

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
