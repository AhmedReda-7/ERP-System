import { createContext, useState  } from 'react';
import axios  from 'axios';


const ManufactoringContext = createContext ();

export function ManufactoringContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllmanufactur()
    {
     const allmanufactur = await axios.get(`https://localhost:44393/api/GetAllManfacturingOrders`);
     setData(allmanufactur.data);
    }
    async function GetManfacturingOrderById(id)
    {
           const manuObject = await axios.get(`https://localhost:44393/api/GetManfacturingOrderById/${id}`);
           return manuObject ;
          
    }

    const valuetoshare = {data,getAllmanufactur,GetManfacturingOrderById}  
    return <ManufactoringContext.Provider value={valuetoshare}>{children}</ManufactoringContext.Provider>
}



export default ManufactoringContext;
