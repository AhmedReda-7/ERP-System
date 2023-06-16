import { Link ,useParams,useNavigate} from "react-router-dom";
import "./rawmatrial.css";
import Charts from "../../Components/Chart/Charts";
import PublishIcon from '@mui/icons-material/Publish';
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import RawMatrialContext from "../../context/RawMatrialContext";
import Swal from 'sweetalert2';

export default function RawMatrial({logOut}) {
  const {materialId} = useParams(); 
  const {handleupdate,getRawmatrialById} = useContext (RawMatrialContext);
  const [rawdata,setRawdata] = useState({

    
  materialName: "string",
  materialDescription: "string"
  });
  const navigate = useNavigate();

const handleSubmit = (e) =>
{
  e.preventDefault();
  handleupdate(materialId,rawdata);
  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${rawdata.materialName} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
  navigate("/rawmatrial");


}
const handleChange = (e) =>
{
   const rawmatrialData = {...rawdata}
   rawmatrialData[e.target.name] = e.target.value ;
   setRawdata(rawmatrialData);
   console.log(rawdata)
}
async function getRawmatrial ()
{


 const rawmatrial = await getRawmatrialById(materialId);
 console.log('====================================');
 console.log(rawmatrial);
 console.log('====================================');
 setRawdata(rawmatrial.data);

} 


useEffect(() => {
  
  getRawmatrial();
   
 
 },[])
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
    <Navbar logOut={logOut}/>
    <div className="rawmatrial">
      <div className="rawmatrialTitleContainer">
        <h1 className="rawmatrialTitle">RawMatrial</h1>
        <Link to="/rawmatrial/newrawmatrial">
          <button className="rawmatrialAddButton">Create</button>
        </Link>
      </div>
      <div className="rawmatrialTop">
          <div className="rawmatrialTopLeft">
          <form className="rawmatrialForm"  onSubmit={handleSubmit}>
              <div className="rawmatrialFormLeft">
              <input type="text" onChange={handleChange} placeholder="materialName" name="materialName" value={rawdata.materialName}/>

              </div>
              <div className="rawmatrialFormLeft">
              <input type="text" onChange={handleChange} placeholder="materialDescription" name="materialDescription" value={rawdata.materialDescription}/>

              </div>
              <button className="rawmatrialAddButton">Update</button>

          </form>
          </div>
          <div className="rawmatrialTopRight">
              <div className="rawmatrialInfoTop">
              <p className="rawmatrialName"><span className="spanform">materialName:</span> {rawdata.materialName}</p>

              </div>
              <p className="paddraw"><span className="spanform">materialDescription:</span> {rawdata.materialDescription}</p>

          </div>
      </div>
  
    </div>
    </div>
    </div>
  );
}
