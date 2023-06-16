import { Link ,useParams,useNavigate} from "react-router-dom";
import "./productinventory.css";
import Charts from "../../Components/Chart/Charts";
import PublishIcon from '@mui/icons-material/Publish';
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from './../../Components/navbar/Navbar';
import { useContext ,useEffect,useState} from 'react';
import ProductInventoryContext from "../../context/ProductInventoryContext";
import Swal from 'sweetalert2';

export default function Productinventory({logOut}) {
    const {productinventoryId} = useParams(); 
    const navigate = useNavigate();

   const {handleupdate,getProductInventoryById} = useContext (ProductInventoryContext);
   const [proinventorydata,setProinventorydata,] = useState({
    productName: "",
    categoryId: 0,
    categoryName: "",
    productId: 0,
    quantity: 0,
    shippingDate: "2023-04-08T23:22:00",
    monthlyCosts: 0,
    area: "",
    reorderingPoint: 0
  });

 const handleSubmit = (e) =>
 {
   e.preventDefault();
   handleupdate(proinventorydata);
   Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${proinventorydata.productName} has been updated.`,
    showConfirmButton: false,
    timer: 2000
  });
   navigate("/productsinventory");


 }
 const handleChange = (e) =>
 {
    const productinventoryData = {...proinventorydata}
    productinventoryData[e.target.name] = e.target.value ;
    setProinventorydata(productinventoryData);
    console.log(proinventorydata)
 }
 async function gettProductInventory ()
 {
 
 
   const productInventory = await getProductInventoryById(productinventoryId);
   console.log('====================================');
   console.log(productInventory);
   console.log('====================================');
   setProinventorydata(productInventory.data);
 
 } 


useEffect(() => {
   
    gettProductInventory();
    
  
  },[])
  return (
    <div className="list">
   <Sidebar/>
    <div className="listContainer">
    <Navbar logOut={logOut}/>    <div className="productinventory">
      <div className="productinventoryTitleContainer">
        <h1 className="productinventoryTitle">product inventory</h1>
        <Link to="/productsinventory/newproductinventory">
          <button className="productinventoryAddButton">Create</button>
        </Link>
      </div>
      <div className="productinventoryTop">
          <div className="productinventoryTopLeft">
          <form className="productinventoryForm" onSubmit={handleSubmit}>
          <div className="productinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="productId" name="productId" value={proinventorydata.productId}/>

          </div>
          <div className="productinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="quantity" name="quantity" value={proinventorydata.quantity}/>

          </div>
          <div className="productinventoryFormLeft">
          <input type="datetime-local" onChange={handleChange} placeholder="shippingDate" name="shippingDate" value={proinventorydata.shippingDate}/>

          </div>
          <div className="productinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="monthlyCosts" name="monthlyCosts" value={proinventorydata.monthlyCosts}/>

          </div>
          <div className="productinventoryFormLeft">
          <input type="text" onChange={handleChange} placeholder="area" name="area" value={proinventorydata.area}/>

          </div>
          <div className="productinventoryFormLeft">
          <input type="number" onChange={handleChange} placeholder="reorderingPoint" name="reorderingPoint" value={proinventorydata.reorderingPoint}/>

          </div>
          <button className="productinventoryAddButton">Update</button>

      </form>
          </div>
          <div className="productinventoryTopRight">
              <div className="productinventoryInfoTop">
              <p className="productinventoryName"><span className="spanform">productId:</span> {proinventorydata.productId}</p>
              <p className="paddorder"><span className="spanform">quantity:</span> {proinventorydata.quantity}</p>
              <p className="paddorder"><span className="spanform">shippingDate:</span> {proinventorydata.shippingDate}</p>
              <p className="paddorder"><span className="spanform">monthlyCosts:</span> {proinventorydata.monthlyCosts}</p>
              <p className="paddorder"><span className="spanform">area:</span> {proinventorydata.area}</p>
              <p className="paddorder"><span className="spanform">reorderingPoint:</span> {proinventorydata.reorderingPoint}</p>

              </div>
          </div>
      </div>

    </div>
    </div>
    </div>
  );
}
