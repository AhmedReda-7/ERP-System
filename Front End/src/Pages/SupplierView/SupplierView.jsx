import { Link ,useNavigate,useParams} from "react-router-dom";
import { useContext ,useEffect,useState} from 'react';
import SupplierContext from "../../context/SupplierContext";
import "./suppview.css";
import Navbar from './../../Components/navbar/Navbar';
import Sidebar from './../../Components/sidebar/Sidebar';
import  axios from 'axios';


export default function SupplierView({logOut}) {
  const {supplierId} = useParams(); 
  const {getSupllierById ,getSuplliermatrialById} = useContext (SupplierContext);
  // const currentId = Number(window.location.pathname.slice(-1));

  const [supplierdata,setSupplierdata] = useState({

        supplierId: 0,
        supplierName: "",
        supplierDescription: " ",
        adverageDeliveryTimeInDays: 0,
        phoneNumber: "",
        email: "",
        address: ""
      
      
  });

  const [supplyMatraial, setSupplyMatraial] = useState([]);
async function getSupplier ()
{


 const supplier = await getSupllierById(supplierId);
 console.log('====================================');
 console.log(supplier);
 console.log('====================================');
 setSupplierdata(supplier.data);


} 
async function getSuppliermatrial ()
{


 const supplier = await getSuplliermatrialById(supplierId);
 setSupplyMatraial(supplier.data);


} 


useEffect(() => {
  
    getSupplier();
    getSuppliermatrial();
   
 
 },[])

return (
  <div className="list">
 <Sidebar/>
  <div className="listContainer">
  <Navbar logOut={logOut}/>
  <div className="product">
    <div className="productTitleContainer">
      <h1 className="productTitle">Supplier</h1>
      <Link to="/supplier/newsupply">
        <button className="productAddButton">Create</button>
      </Link>
    </div>
    <div className="productTop">
        
    <div className="productTopRight">
    <div className="productInfoTop">
    
    <p className="supplierName"><span className="spanform">supplierName:</span> {supplierdata.supplierName}</p>

    <p className="paddorder"><span className="spanform">supplierDescription: </span>{supplierdata.supplierDescription}</p>
    <p className="paddorder"><span className="spanform">adverageDeliveryTimeInDays: </span>{supplierdata.adverageDeliveryTimeInDays}</p>
    <p className="paddorder"><span className="spanform">phoneNumber: </span>{supplierdata.phoneNumber}</p>
    <p className="paddorder"><span className="spanform">email: </span>{supplierdata.email}</p>
    <p className="paddorder"><span className="spanform">address: </span>{supplierdata.address}</p>
    <table>
    <thead>
    <th>material Id</th>
    <th>material Name</th>
    <th>price Per Unit</th>
    </thead>
    <tbody>
    {supplyMatraial.map(item =>
      <tr key={item.id}>
      <td>{item.materialId}</td>
      <td>{item.materialName}</td>
      <td>{item.pricePerUnit}</td>
      </tr>
      )}
    
    </tbody>
    </table>
    </div>
  
</div>

    </div>
  </div> 
  </div>
  </div>
);
}
