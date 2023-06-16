import { createContext, useState  } from 'react';
import axios  from 'axios';


const EmployeeContext = createContext ();

export function EmployeeContextProvider({children})
{
    const [data, setData] = useState([]);
    async function getAllEmployee()
    {
     const allemployee = await axios.get(`https://localhost:44393/api/GetAllEmployee`);
     setData(allemployee.data);
    }
    async function getEmployeeById(id)
    {
           const empObject = await axios.get(`https://localhost:44393/api/GetEmployeeById/${id}`);
           return empObject ;
          
    }
 async function deleteEmployee(id)
 {
        const deletedEmployee = await axios.delete(`https://localhost:44393/api/DeleletEmployeeById?id=${id}`);
       
 }
    const handleDelete = (id) => {
       deleteEmployee(id);
getAllEmployee();
       
        
      };
      async function updateCategory(id,updatedData)
 {
        const updatedCategory = await axios.put(`https://localhost:44393/api/UpdateEmployee/${id}`,updatedData);
       
 }
    const handleupdate = (id,updatedData) => {
       updateCategory(id,updatedData);
       getAllEmployee();
       
        
      };
    const valuetoshare = {data,handleDelete,getAllEmployee,handleupdate,getEmployeeById}  
    return <EmployeeContext.Provider value={valuetoshare}>{children}</EmployeeContext.Provider>
}



export default EmployeeContext;
