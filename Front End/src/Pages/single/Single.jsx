import { Link ,useParams} from "react-router-dom";
import { useContext ,useEffect,useState} from 'react';
import EmployeeContext from "../../context/EmployeeContext";
import "./single.scss";
import Navbar from './../../Components/navbar/Navbar';
import Sidebar from './../../Components/sidebar/Sidebar';


export default function Single({logOut}) {
  const {employeeId} = useParams(); 
  const {handleupdate,getEmployeeById} = useContext (EmployeeContext);
  const [empdata,setEmpdata] = useState({
    employeeFullName: "",
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-03-23T22:05:35.637Z",
    attendenceTime: "2023-03-23T22:05:35.637Z",
    holidays: "2023-03-23T22:05:35.637Z",
    employeeSalary: 0,
    employeeId: 0
  });

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(employeeId,empdata);

}
const handleChange = (e) =>
{
   const employeeData = {...empdata}
   employeeData[e.target.name] = e.target.value ;
   setEmpdata(employeeData);
   console.log(empdata)
}
async function getemployee ()
{


 const employee = await getEmployeeById(employeeId);
 console.log('====================================');
 console.log(employee);
 console.log('====================================');
 setEmpdata(employee.data);

} 


useEffect(() => {
  
  getemployee();
   
 
 },[])
return (
  <div className="list">
 <Sidebar/>
  <div className="listContainer">
  <Navbar logOut={logOut}/>
  <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Employee</h1>
      <Link to="/employee/new">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        <div className="productTopLeft">
        <form className="productForm" onSubmit={handleSubmit}>
        <div className="productFormLeft">
        <input type="text" onChange={handleChange} placeholder="employeeFullName" name="employeeFullName" value={empdata.employeeFullName}/>

        </div>
        <div className="productFormLeft">
        <input type="text" onChange={handleChange} placeholder="taxWithholding" name="taxWithholding" value={empdata.taxWithholding}/>

        </div>
        <div className="productFormLeft">
        <input type="number" onChange={handleChange} placeholder="hoursWorked" name="hoursWorked" value={empdata.hoursWorked}/>

        </div>
        <div className="productFormLeft">
        <input type="datetime-local" onChange={handleChange} placeholder="dateOfJoining" name="dateOfJoining" value={empdata.dateOfJoining}/>

        </div>
       
        <div className="productFormLeft">
        <input type="datetime-local" onChange={handleChange} placeholder="attendenceTime" name="attendenceTime" value={empdata.attendenceTime}/>

        </div>
        <div className="productFormLeft">
        <input type="datetime-local" onChange={handleChange} placeholder="holidays" name="holidays" value={empdata.holidays}/>

        </div>
        <div className="productFormLeft">
        <input type="number" onChange={handleChange} placeholder="employeeSalary" name="employeeSalary" value={empdata.employeeSalary}/>

        </div>
        <div className="productFormLeft">
        <input type="number" onChange={handleChange} placeholder="employeeId" name="employeeId" value={empdata.employeeId}/>

        </div>
        
        <button className="productAddButton">Update</button>

    </form>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
            
                <p className="categoryName"><span className="spanform">employeeFullName:  </span>{empdata.employeeFullName}</p>

                <p className="paddorder"><span className="spanform">taxWithholding:  </span>{empdata.taxWithholding}</p>
                <p className="paddorder"><span className="spanform">hoursWorked:  </span>{empdata.hoursWorked}</p>
                <p className="paddorder"><span className="spanform">dateOfJoining:  </span>{empdata.dateOfJoining}</p>
                <p className="paddorder"><span className="spanform">attendenceTime:  </span>{empdata.attendenceTime}</p>
                <p className="paddorder"><span className="spanform">holidays:  </span>{empdata.holidays}</p>
                <p className="paddorder"><span className="spanform">employeeSalary:  </span>{empdata.employeeSalary}</p>
                <p className="paddorder"><span className="spanform">employeeId:  </span>{empdata.employeeId}</p>
            </div>
         
        </div>
    </div>
   
  </div>
  </div>
  </div>
);
}
