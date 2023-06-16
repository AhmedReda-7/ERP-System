import "./newmanufactur.scss";
import Sidebar from "./../../Components/sidebar/Sidebar";
import Navbar from "./../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";
import ProductInventoryContext from "../../context/ProductInventoryContext";
import RowMaterial from "./RowMaterial/RowMaterial";

function NewManufactur({ inputs, title ,logOut }) {
  const [file, setFile] = useState("");
  const { getProductInventory, data } = useContext(ProductInventoryContext);
  const navigate = useNavigate();

  const [manufactur, setManufactur] = useState({
    productManufacturedId: 0,
    qtyToManufacture: 0,
    manufacturingCost: 0,
    startingDate: "2023-03-23T21:38:17.810Z",
    rawMaterialsUsed: [
      {
        materialId: "",
        qty: "",
      },
    ],
  });

  const productInvOptions = data?.map((product) => {
    return (
      <option value={product.productId} key={product.productId}>
        {product.productId} - {product.productName}
      </option>
    );
  });

  useEffect(() => {
    getProductInventory();
  }, [manufactur]);

  const deleteRow = (indx) => {
    const data = manufactur;
    data.rawMaterialsUsed.splice(indx, 1);
    const newManu = { ...manufactur, data };
    setManufactur(newManu);
  };
  const addMaterial = () => {
    const data = manufactur;
    data.rawMaterialsUsed.push({
      materialId: "",
      qty: "",
    });

    const newManu = { ...manufactur, data };
    setManufactur(newManu);
  };

  const handleInputChange = (e) => {
    const manufacturData = { ...manufactur };
    manufacturData[e.target.name] = e.target.value;

    setManufactur(manufacturData);
  };

  async function sendData() {
    try {
      const res = await axios.post(
        `https://localhost:44393/api/CreateManufacturingOrder`,manufactur
       
      );
      navigate("/manufactur");
      console.log(res);

      const data = await res.json();
      console.log(data);
      

    } catch (err) {
      console.log("error ", err);
    }

    console.log(manufactur);
    // console.log(res);
    // const manufacturData = { ...manufactur };

    // const res = await axios.post (`https://localhost:44393/api/CreateManufacturingOrder`,manufacturData)

    // console.log(manufacturData);
    // console.log(res);
    // console.log("====================================");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${manufactur.productManufacturedId} has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });
  };

  const renderedRowMaterials = manufactur.rawMaterialsUsed.map(
    (material, indx) => (
      <RowMaterial
        key={indx}
        indx={indx}
        manufactur={manufactur}
        setManufactur={setManufactur}
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
              <div className="" style={{ display: "flex", gap: "15px" }}>
                <label htmlFor="productManufacturedId">
                  productManufacturedId
                </label>
                <select
                  name="productManufacturedId"
                  id="productManufacturedId"
                  onChange={handleInputChange}
                >
                  {productInvOptions}
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

              {renderedRowMaterials}
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
export default NewManufactur;
