import { Link ,useParams,useNavigate} from "react-router-dom";
import "./emptask.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import EmployeeTaskContext from "../../context/EmployeeTaskContext";
import Swal from 'sweetalert2';

export default function Employeetask({logOut}) {
  const {employeetaskid} = useParams(); 
  const {handleupdate,getemployeetaskById} = useContext (EmployeeTaskContext);
  const [hrdata,setHrdata] = useState({

    
    taskDescription: "string",
    taskAssignedTime: "2023-05-19T07:59:51.985Z",
    taskDeadlineTime: "2023-05-19T07:59:51.985Z",
    emplyeeId: 0
  });
  const navigate = useNavigate();

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(employeetaskid,hrdata);
  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${hrdata.taskDescription} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
  navigate("/employeetask");


}
const handleChange = (e) =>
{
   const hrlData = {...hrdata}
   hrlData[e.target.name] = e.target.value ;
   setHrdata(hrlData);
   console.log(hrdata)
}
async function getHr ()
{


 const hr = await getemployeetaskById(employeetaskid);
 console.log('====================================');
 console.log(hr);
 console.log('====================================');
 setHrdata(hr.data);

} 


useEffect(() => {
  
    getHr();
   
 
 },[])
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
    <Navbar logOut={logOut}/>
    <div className="hr">
      <div className="hrTitleContainer">
        <h1 className="hrTitle">EMPLOYEE Task</h1>
        <Link to="/employeetask/newemployeetask">
          <button className="hrAddButton">Create</button>
        </Link>
      </div>
      <div className="hrTop">
          <div className="hrTopLeft">
          <form className="hrForm"  onSubmit={handleSubmit}>
              <div className="hrFormLeft">
              <input type="text" onChange={handleChange} placeholder="taskDescription" name="taskDescription" value={hrdata.taskDescription}/>

              </div>
              <div className="hrFormLeft">
              <input type="datetime-local" onChange={handleChange} placeholder="taskAssignedTime" name="taskAssignedTime" value={hrdata.taskAssignedTime}/>

              </div>
              <div className="hrFormLeft">
              <input type="datetime-local" onChange={handleChange} placeholder="taskDeadlineTime" name="taskDeadlineTime" value={hrdata.taskDeadlineTime}/>

              </div>
              <div className="hrFormLeft">
              <input type="number" onChange={handleChange} placeholder="emplyeeId" name="emplyeeId" value={hrdata.emplyeeId}/>

              </div>
              
              <button className="hrAddButton">Update</button>

          </form>
          </div>
          <div className="hrTopRight">
              <div className="hrInfoTop">
              <p className="hrName"><span className="spanform">taskDescription:</span> {hrdata.taskDescription}</p>
              <p className="hrName"><span className="spanform">taskAssignedTime:</span> {hrdata.taskAssignedTime}</p>
              <p className="hrName"><span className="spanform">taskDeadlineTime:</span> {hrdata.taskDeadlineTime}</p>
              <p className="hrName"><span className="spanform">emplyeeId:</span> {hrdata.emplyeeId}</p>

              </div>

          </div>
      </div>
  
    </div>
    </div>
    </div>
  );
}
