import "./newemptask.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import {useEffect, useContext,useState } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import EmployeeContext from "../../context/EmployeeContext";

function NewEmployeetask({ inputs, title ,logOut}) {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { getAllemployee, dataemp } = useContext(EmployeeContext);

  const [emptask,setEmptask] = useState({
    taskDescription: "string",
    taskAssignedTime: "2023-05-19T08:01:56.188Z",
    taskDeadlineTime: "2023-05-19T08:01:56.188Z",
    emplyeeId: 0
})
const productInvOptions = dataemp?.map((product) => {
  return (
    <option value={product.employeeId} key={product.employeeId}>
      {product.employeeId} - {product.employeeFullName}
    </option>
  );
});
useEffect(() => {
  getAllemployee();
}, [emptask]);

  const handleInputChange = (e) => {
    const hrData = {...emptask}
    hrData[e.target.name]= e.target.value;
    setEmptask(hrData);


  }
  async function sendData ()
  {
    const hrData = {...emptask ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewTaskForEmployee`,hrData);
   navigate("/employeetask");


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
      text: `${emptask.taskDescription} has been Added.`,
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
export default NewEmployeetask