import { Link ,useParams,useNavigate} from "react-router-dom";
import "./employeetrain.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import EmployeeTrainingContext from "../../context/EmployeeTrainingContext";
import Swal from 'sweetalert2';

export default function EmployeeTrain({logOut}) {
  const {trainnningId} = useParams(); 
  const {handleupdate,getEmpTrainById} = useContext (EmployeeTrainingContext);
  const [emptrainndata,setEmptrainndata] = useState({

    trainningType: "",
  trainningDescription: "",
  employeeId: 0,
  hrid: 0
  });
  const navigate = useNavigate();

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(trainnningId,emptrainndata);
  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${emptrainndata.trainningType} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
  navigate("/employeetrain");


}
const handleChange = (e) =>
{
   const hrlData = {...emptrainndata}
   hrlData[e.target.name] = e.target.value ;
   setEmptrainndata(hrlData);
   console.log(emptrainndata)
}
async function getHr ()
{


 const hr = await getEmpTrainById(trainnningId);
 console.log('====================================');
 console.log(hr);
 console.log('====================================');
 setEmptrainndata(hr.data);

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
        <h1 className="hrTitle">Emloyee-Training</h1>
        <Link to="/employeetrain/newemployeetrain">
          <button className="hrAddButton">Create</button>
        </Link>
      </div>
      <div className="hrTop">
          <div className="hrTopLeft">
          <form className="hrForm"  onSubmit={handleSubmit}>
              <div className="hrFormLeft">
              <input type="text" onChange={handleChange} placeholder="trainningType" name="trainningType" value={emptrainndata.trainningType}/>
              <input type="text" onChange={handleChange} placeholder="trainningDescription" name="trainningDescription" value={emptrainndata.trainningDescription}/>
              <input type="number" onChange={handleChange} placeholder="employeeId" name="employeeId" value={emptrainndata.employeeId}/>
              <input type="number" onChange={handleChange} placeholder="hrid" name="hrid" value={emptrainndata.hrid}/>

              </div>
              
              <button className="hrAddButton">Update</button>

          </form>
          </div>
          <div className="hrTopRight">
              <div className="hrInfoTop">
              <p className="hrName"><span className="spanform">trainningType:</span> {emptrainndata.trainningType}</p>
              <p className="hrName"><span className="spanform">trainningDescription:</span> {emptrainndata.trainningDescription}</p>
              <p className="hrName"><span className="spanform">employeeId:</span> {emptrainndata.employeeId}</p>
              <p className="hrName"><span className="spanform">hrid:</span> {emptrainndata.hrid}</p>

              </div>

          </div>
      </div>
  
    </div>
    </div>
    </div>
  );
}
