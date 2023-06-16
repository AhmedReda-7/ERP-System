
import "./new.scss";
import { useState } from "react";
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import  axios  from 'axios';
import Swal from 'sweetalert2';

function New({ inputs, title ,logOut}) {
  const [file, setFile] = useState("");
  const [employee,setEmployee] = useState({employeeFullName: "",
  taxWithholding: 0,
  hoursWorked: 0,
  dateOfJoining: "2023-02-26T20:21:07.716Z",
  attendenceTime: "2023-02-26T20:21:07.716Z",
  holidays: "2023-02-26T20:21:07.716Z",
  employeeSalary: 0,
  employeeId: 0})
  const handleInputChange = (e) => {
    const employeeData = {...employee}
    employeeData[e.target.name]= e.target.value;
    setEmployee(employeeData);


  }
  async function sendData ()
  {
    const employeeData = {...employee ,
    
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-02-26T20:21:07.716Z"
   }
   const res = await axios.post (`https://localhost:44393/api/AddNewEmployee`,employeeData)

// console.log('====================================');
// console.log(res);
// console.log('====================================');
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    sendData();
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Added!',
  //     text: `${employee.employeeFullName} has been Added.`,
  //     showConfirmButton: false,
  //     timer: 1500
  // });

  }
  return (
    <div className="new">
    <Sidebar/>
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
  )
}

export default New