import { Link,useParams,useNavigate } from "react-router-dom";
import "./rawmatrialinventory.css";
import Charts from "../../Components/Chart/Charts";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import RawMatrialInventoryContext from "../../context/RawMatrialInventoryContext";
import Swal from 'sweetalert2';

export default function RawMatrialinventory({logOut}) {
    const {rawmatrialinventoryId} = useParams(); 
    const navigate = useNavigate();

    const {handleupdate,getRawMatrialInventoryById} = useContext (RawMatrialInventoryContext);
    const [rawinventorydata,setRawinventorydata,] = useState({
      materialName: "",
      materialDescription: "",
      materialId: 0 ,
      quantity: 0,
      shippingDate: "2023-05-02T14:02:00",
      monthlyCosts: 0,
      area: "",
      reorderingPoint: 0,
  });
 
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    handleupdate(rawinventorydata);
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${rawinventorydata.materialName} has been updated.`,
      showConfirmButton: false,
      timer: 2000
    });
    navigate("/rawmatrialinventory");

  }
  const handleChange = (e) =>
  {
     const productinventoryData = {...rawinventorydata}
     productinventoryData[e.target.name] = e.target.value ;
     setRawinventorydata(productinventoryData);
     console.log(rawinventorydata)
  }
  async function gettRawmatrialInventory ()
  {
  
  
    const rawmatrialInventory = await getRawMatrialInventoryById(rawmatrialinventoryId);
    console.log('====================================');
    console.log(rawmatrialInventory);
    console.log('====================================');
    setRawinventorydata(rawmatrialInventory.data);
  
  } 
 
 
 useEffect(() => {
    
    gettRawmatrialInventory();
     
   
   },[])
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
    <Navbar logOut={logOut}/>
    <div className="rawmatrialinventory">
      <div className="rawmatrialinventoryTitleContainer">
        <h1 className="rawmatrialinventoryTitle">rawmatrialinventory</h1>
        <Link to="/rawmatrialinventory/newrawmatrialinventory">
          <button className="rawmatrialinventoryAddButton">Create</button>
        </Link>
      </div>
      <div className="rawmatrialinventoryTop">
          <div className="rawmatrialinventoryTopLeft">
          <form className="rawmatrialinventoryForm" onSubmit={handleSubmit}>
          <div className="rawmatrialinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="materialId" name="materialId" value={rawinventorydata.materialId}/>

          </div>
          <div className="rawmatrialinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="quantity" name="quantity" value={rawinventorydata.quantity}/>

          </div>
          <div className="rawmatrialinventoryFormLeft">
          <input type="datetime-local" onChange={handleChange} placeholder="shippingDate" name="shippingDate" value={rawinventorydata.shippingDate}/>

          </div>
          <div className="rawmatrialinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="monthlyCosts" name="monthlyCosts" value={rawinventorydata.monthlyCosts}/>

          </div>
          <div className="rawmatrialinventoryFormLeft">
          <input type="text" onChange={handleChange} placeholder="area" name="area" value={rawinventorydata.area}/>

          </div>
          <div className="rawmatrialinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="reorderingPoint" name="reorderingPoint" value={rawinventorydata.reorderingPoint}/>

          </div>
          
          <button className="rawmatrialinventoryAddButton">Update</button>

      </form>
          </div>
          <div className="rawmatrialinventoryTopRight">
              <div className="rawmatrialinventoryInfoTop">
              <p className="rawmatrialinventoryName"><span className="spanform">materialId:</span> {rawinventorydata.materialId}</p>
              <p className="paddorder"><span className="spanform">quantity:</span> {rawinventorydata.quantity}</p>
              <p className="paddorder"><span className="spanform">shippingDate:</span> {rawinventorydata.shippingDate}</p>
              <p className="paddorder"><span className="spanform">monthlyCosts:</span> {rawinventorydata.monthlyCosts}</p>
              <p className="paddorder"><span className="spanform">area:</span> {rawinventorydata.area}</p>
              <p className="paddorder"><span className="spanform">reorderingPoint:</span> {rawinventorydata.reorderingPoint}</p>

              </div>

          </div>
      </div>
    
    </div>
    </div>
    </div>
  );
}
