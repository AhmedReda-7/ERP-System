import "./newhr.scss";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import { useState } from "react";
import  axios  from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function NewHrManager({ inputs, title ,logOut}) {
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const [hr,setHr] = useState({
    hrfullName: "string",
  hrEmail: "string"})
  const handleInputChange = (e) => {
    const hrData = {...hr}
    hrData[e.target.name]= e.target.value;
    setHr(hrData);


  }
  async function sendData ()
  {
    const hrData = {...hr ,
    
  
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewHRManager`,hrData);
   navigate("/hrmanger");


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
      text: `${hr.hrfullName} has been Added.`,
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
export default NewHrManager