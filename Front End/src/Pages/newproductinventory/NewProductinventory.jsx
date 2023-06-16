import "./newproductinventory.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import  axios  from 'axios';
import {useEffect, useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import AllproductContext from "../../context/AllproductContext";

function NewProductinventory({ inputs, title,logOut }) {  
  const [file, setFile] = useState("");
  const { getAllproduct, data } = useContext(AllproductContext);

  const navigate = useNavigate();

  const [newdatainventory,setNewdatainventory] = useState({
    productId: 0,
  quantity: 0,
  shippingDate: "2023-02-28T20:41:51.727Z",
  monthlyCosts: 0,
  area: "string",
  reorderingPoint: 0
  })
  const productInvOptions = data?.map((product) => {
    return (
      <option value={product.productId} key={product.productId}>
        {product.productId} - {product.productName}
      </option>
    );
  });
  useEffect(() => {
    getAllproduct();
  }, [newdatainventory]);
  const handleInputChange = (e) => {
    const newData = {...newdatainventory}
    newData[e.target.name]= e.target.value;
    setNewdatainventory(newData);


  }
  async function sendData ()
  {
    const newDataInventory = {...newdatainventory ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddAProductToInventory`,newDataInventory)
      navigate("/productsinventory");

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
      text: `${newdatainventory.productId} has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });
  }
  return (
    <div className="NewProductinventory">
    <Sidebar />
    <div className="newproductContainer">
    <Navbar logOut={logOut}/>    <div className="top">
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
        <label htmlFor="productId">
         Choose Product:
        </label>
        <select
          name="productId"
          id="productId"
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
export default NewProductinventory