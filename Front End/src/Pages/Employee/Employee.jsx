import { Link ,useParams,useNavigate} from "react-router-dom";
import "./employee.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import EmployeeContext from "../../context/EmployeeContext";
import Swal from 'sweetalert2';

export default function Employee({logOut}) {
  const {employeeid} = useParams(); 
  const {handleupdate,getEmployeeById} = useContext (EmployeeContext);
  const [empdata,setEmpdata] = useState({

    
    employeeFullName: "",
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-05-17T19:43:58.755Z",
    attendenceTime: "2023-05-17T19:43:58.755Z",
    holidays: "2023-05-17T19:43:58.755Z",
    employeeSalary: 0,
    hrmanagerId: 0
  });
  const navigate = useNavigate();

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(employeeid,empdata);
  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${empdata.employeeFullName} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
  navigate("/employee");


}
const handleChange = (e) =>
{
   const hrlData = {...empdata}
   hrlData[e.target.name] = e.target.value ;
   setEmpdata(hrlData);
   console.log(empdata)
}
async function getEmployee ()
{


 const emp = await getEmployeeById(employeeid);
 console.log('====================================');
 console.log(emp);
 console.log('====================================');
 setEmpdata(emp.data);

} 


useEffect(() => {
  
    getEmployee();
   
 
 },[])
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
    <Navbar logOut={logOut}/>
    <div className="hr">
      <div className="hrTitleContainer">
        <h1 className="hrTitle">Employee</h1>
        <Link to="/employee/newemployee">
          <button className="hrAddButton">Create</button>
        </Link>
      </div>
      <div className="hrTop">
          <div className="hrTopLeft">
          <form className="hrForm"  onSubmit={handleSubmit}>
              <div className="hrFormLeft">
              <input type="number" onChange={handleChange} placeholder="hrmanagerId" name="hrmanagerId" value={empdata.hrmanagerId}/>

              </div>
              <div className="hrFormLeft">
              <input type="text" onChange={handleChange} placeholder="employeeFullName" name="employeeFullName" value={empdata.employeeFullName}/>

              </div>
              <div className="hrFormLeft">
              <input type="number" onChange={handleChange} placeholder="taxWithholding" name="taxWithholding" value={empdata.taxWithholding}/>

              </div>
              <div className="hrFormLeft">
              <input type="number" onChange={handleChange} placeholder="hoursWorked" name="hoursWorked" value={empdata.hoursWorked}/>

              </div>
              <div className="hrFormLeft">
              <input type="datetime-local" onChange={handleChange} placeholder="dateOfJoining" name="dateOfJoining" value={empdata.dateOfJoining}/>

              </div>
              <div className="hrFormLeft">
              <input type="datetime-local" onChange={handleChange} placeholder="attendenceTime" name="attendenceTime" value={empdata.attendenceTime}/>

              </div>
              <div className="hrFormLeft">
              <input type="datetime-local" onChange={handleChange} placeholder="holidays" name="holidays" value={empdata.holidays}/>

              </div>
              <div className="hrFormLeft">
              <input type="number" onChange={handleChange} placeholder="employeeSalary" name="employeeSalary" value={empdata.employeeSalary}/>

              </div>
              
              <button className="hrAddButton">Update</button>

          </form>
          </div>
          <div className="hrTopRight">
              <div className="hrInfoTop">
              <p className="hrName"><span className="spanform">hrmanagerId:</span> {empdata.hrmanagerId}</p>
              <p className="hrName"><span className="spanform">employeeFullName:</span> {empdata.employeeFullName}</p>
              <p className="hrName"><span className="spanform">taxWithholding:</span> {empdata.taxWithholding}</p>
              <p className="hrName"><span className="spanform">hoursWorked:</span> {empdata.hoursWorked}</p>
              <p className="hrName"><span className="spanform">dateOfJoining:</span> {empdata.dateOfJoining}</p>
              <p className="hrName"><span className="spanform">attendenceTime:</span> {empdata.attendenceTime}</p>
              <p className="hrName"><span className="spanform">holidays:</span> {empdata.holidays}</p>
              <p className="hrName"><span className="spanform">employeeSalary:</span> {empdata.employeeSalary}</p>

              </div>

          </div>
      </div>
  
    </div>
    </div>
    </div>
  );
}
