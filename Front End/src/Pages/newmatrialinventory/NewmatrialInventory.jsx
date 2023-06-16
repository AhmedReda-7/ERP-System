import "./newmatrialinventory.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import {useEffect, useContext,useState } from "react";
import  axios  from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import RawMatrialContext from "../../context/RawMatrialContext";

function NewmatrialInventory({ inputs, title ,logOut}) {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { getAllRawMatrial, data } = useContext(RawMatrialContext);

  const [rawmatrialinventory,setRawmatrialinventory] = useState({
 rawmatrialinventoryName: "",
  rawmatrialinventoryDescription: ""})
  const productInvOptions = data?.map((product) => {
    return (
      <option value={product.materialId} key={product.materialId}>
        {product.materialId} - {product.materialName}
      </option>
    );
  });
  useEffect(() => {
    getAllRawMatrial();
  }, [rawmatrialinventory]);

  const handleInputChange = (e) => {
    const rawmatrialinventoryData = {...rawmatrialinventory}
    rawmatrialinventoryData[e.target.name]= e.target.value;
    setRawmatrialinventory(rawmatrialinventoryData);


  }
  async function sendData ()
  {
    const rawmatrialinventoryData = {...rawmatrialinventory ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewRawMaterialToInventory`,rawmatrialinventoryData)
   navigate("/rawmatrialinventory");

// console.log('====================================');
// console.log(res);
// console.log('====================================');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
 
    sendData();
    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${rawmatrialinventory.rawmatrialinventoryName} has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });

  }
  return (
    <div className="newrawmatrialinventory">
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
        <form onSubmit={handleSubmit} >
        <div className="" style={{ display: "flex", gap: "15px" }}>
        <label htmlFor="materialId">
         Choose Raw-Matrial:
        </label>
        <select
          name="materialId"
          id="materialId"
          onChange={handleInputChange}
        >
          {productInvOptions}
        </select>
      </div>

          {inputs.map((input) => (
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} name={input.name}  onChange={handleInputChange} placeholder={input.placeholder} />
            </div>
          ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
}
export default NewmatrialInventory