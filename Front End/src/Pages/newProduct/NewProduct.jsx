
import "./newProduct.scss";
import {useEffect, useContext,useState } from "react";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import CategoryContext from "../../context/CategoryContext";


function NewProduct({ inputs, title,logOut }) {
  const [file, setFile] = useState("");
  const { getAllcategory, data } = useContext(CategoryContext);

  const [newdata,setNewdata] = useState({
    productName: "",
    productDescription: "",
    purchasePrice: 0,
    salesPrice: 0,
    categoryId: 1
  })
  console.log(newdata.productName);

  const navigate = useNavigate();
  const productInvOptions = data?.map((product) => {
    return (
      <option value={product.categoryId} key={product.categoryId}>
        {product.categoryId} - {product.categoryName}
      </option>
    );
  });
  useEffect(() => {
    getAllcategory();
  }, [newdata]);
  const handleInputChange = (e) => {
    const newData = {...newdata}
    newData[e.target.name]= e.target.value;
    setNewdata(newData);


  }
  async function sendData ()
  {
    const newData = {...newdata ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewProduct`,newData)
   navigate("/products");


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
      text: `${newdata.productName} has been Added.`,
      showConfirmButton: false,
      timer: 1500
  });

  }
  return (
    <div className="newproduct">
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
        <label htmlFor="categoryId">
         Choose Categeory:
        </label>
        <select
          name="categoryId"
          id="categoryId"
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
  )
}

export default NewProduct