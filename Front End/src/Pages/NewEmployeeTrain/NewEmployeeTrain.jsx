import "./newemployeetrain.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import {useEffect, useContext,useState } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import EmployeeContext from "../../context/EmployeeContext";
import HrMangerContext from "../../context/HrMangerContext";
function NewEmployeeTrain({ inputs, title ,logOut}) {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { getAllemployee, dataemp } = useContext(EmployeeContext);
  const { getAllhrmanager, data } = useContext(HrMangerContext);
  const [emptrain,setEmptrain] = useState({
    trainningType: "string",
    trainningDescription: "string",
    employeeId: 0,
    hrid: 0})

    const productInvOptions = dataemp?.map((product) => {
      return (
        <option value={product.employeeId} key={product.employeeId}>
          {product.employeeId} - {product.employeeFullName}
        </option>
      );
    });
    const hrOptions = data?.map((product) => {
      return (
        <option value={product.hrid} key={product.hrid}>
          {product.hrid} - {product.hrfullName}
        </option>
      );
    });
    useEffect(() => {
      getAllemployee();
      getAllhrmanager();
    }, [emptrain]);
  const handleInputChange = (e) => {
    const emptrainData = {...emptrain}
    emptrainData[e.target.name]= e.target.value;
    setEmptrain(emptrainData);


  }
  async function sendData ()
  {
    const emptrainData = {...emptrain ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/CreateTrainning`,emptrainData);
   navigate("/employeetrain");


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
      text: `${emptrain.trainningType} has been Added.`,
      showConfirmButton: false,
      timer: 2000
  });
  }
  return (
    <div className="newrawmatrial">
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
        <label htmlFor="hrid">
         Choose HR-Manager:
        </label>
        <select
          name="hrid"
          id="hrid"
          onChange={handleInputChange}
        >
          {hrOptions}
          
        </select>
      </div>
      
        <div className="" style={{ display: "flex", gap: "15px" }}>
        <label htmlFor="employeeId">
         Choose Employee:
        </label>
        <select
          name="employeeId"
          id="employeeId"
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
export default NewEmployeeTrain