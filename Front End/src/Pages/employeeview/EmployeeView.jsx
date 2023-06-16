import { Link ,useParams} from "react-router-dom";
import { useContext ,useEffect,useState} from 'react';
import EmployeeContext from "../../context/EmployeeContext";
import "./employeeview.scss";
import Navbar from './../../Components/navbar/Navbar';
import Sidebar from './../../Components/sidebar/Sidebar';


export default function EmployeeView({logOut}) {
  const {employeeid} = useParams(); 
  const {getEmployeeById} = useContext (EmployeeContext);
  const [empdata,setEmpdata] = useState({
    employeeId: 0,
    hrName: "",
    employeeFullName: "",
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-05-17T19:44:48.087",
    attendenceTime: "2023-05-17T19:44:48.087",
    holidays: "2023-05-17T00:00:00",
    employeeSalary: 0,
    hrid: 0
  });
  console.log(empdata.hrName);


async function getemployee ()
{


 const employee = await getEmployeeById(employeeid);
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
        
    <div className="productTopRight">
    <div className="productInfoTop">
    
        <p className="categoryName"><span className="spanform">employeeFullName:  </span>{empdata.employeeFullName}</p>

        <p className="paddorder"><span className="spanform">taxWithholding:  </span>{empdata.taxWithholding}</p>
        <p className="paddorder"><span className="spanform">hoursWorked:  </span>{empdata.hoursWorked}</p>
        <p className="paddorder"><span className="spanform">dateOfJoining:  </span>{empdata.dateOfJoining}</p>
        <p className="paddorder"><span className="spanform">attendenceTime:  </span>{empdata.attendenceTime}</p>
        <p className="paddorder"><span className="spanform">holidays:  </span>{empdata.holidays}</p>
        <p className="paddorder"><span className="spanform">employeeSalary:  </span>{empdata.employeeSalary}</p>
        <p className="paddorder"><span className="spanform">employeeid:  </span>{empdata.employeeId}</p>
        <p className="paddorder"><span className="spanform">hrName:  </span>{empdata.hrName}</p>
        <p className="paddorder"><span className="spanform">hrmanagerId:  </span>{empdata.hrid}</p>
    </div>
 
</div>
    </div>
   
  </div>
  </div>
  </div>
);
}
