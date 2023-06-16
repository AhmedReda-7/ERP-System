import { createContext, useState  } from 'react';
import axios  from 'axios';


const SupplierorderContext = createContext ();

export function SupplierorderContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllSupplierorder()
    {
        // const token = localStorage.getItem('token');
        const allSupplierorder = await axios.get(`https://localhost:44393/api/GetAllSupplierOrders`);

    //  const allSupplierorder = await axios.get(`https://localhost:44393/api/GetAllSupplierOrders`);
     setData(allSupplierorder.data);
    }
    async function GetSupplierOrderById(id)
    {
           const manuObject = await axios.get(`https://localhost:44393/api/GetSupplierOrderById/${id}`);
           return manuObject ;
          
    }

    const valuetoshare = {data,getAllSupplierorder,GetSupplierOrderById}  
    return <SupplierorderContext.Provider value={valuetoshare}>{children}</SupplierorderContext.Provider>
}



export default SupplierorderContext;
