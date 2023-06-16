import { Link ,useParams,useNavigate} from "react-router-dom";
import "./hr.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import HrMangerContext from "../../context/HrMangerContext";
import Swal from 'sweetalert2';

export default function HrManager({logOut}) {
  const {hrid} = useParams(); 
  const {handleupdate,getHrById} = useContext (HrMangerContext);
  const [hrdata,setHrdata] = useState({

    
    hrfullName: "string",
  });
  const navigate = useNavigate();

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(hrid,hrdata);
  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${hrdata.hrfullName} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
  navigate("/hrmanger");


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


 const hr = await getHrById(hrid);
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
        <h1 className="hrTitle">HR Manager</h1>
        <Link to="/hrmanger/newhrmanger">
          <button className="hrAddButton">Create</button>
        </Link>
      </div>
      <div className="hrTop">
          <div className="hrTopLeft">
          <form className="hrForm"  onSubmit={handleSubmit}>
              <div className="hrFormLeft">
              <input type="text" onChange={handleChange} placeholder="hrfullName" name="hrfullName" value={hrdata.hrfullName}/>

              </div>
              
              <button className="hrAddButton">Update</button>

          </form>
          </div>
          <div className="hrTopRight">
              <div className="hrInfoTop">
              <p className="hrName"><span className="spanform">hrfullName:</span> {hrdata.hrfullName}</p>

              </div>

          </div>
      </div>
  
    </div>
    </div>
    </div>
  );
}
