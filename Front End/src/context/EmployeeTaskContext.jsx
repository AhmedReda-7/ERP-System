import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const EmployeeTaskContext = createContext ();

export function EmployeeTaskContextProvider({children})
{
    const [data, setData] = useState([]);

    async function getAllemployeetast()
    {
       const allhr = await axios.get(`https://localhost:44393/api/GetAllEmployeeTasks`);



     setData(allhr.data);
    }
    async function getAllemptask()
    {
     const allhr = await axios.get(`https://localhost:44393/api/GetAllEmployeeTasks`);
//      console.log( allhr.data);
     return allhr.data;
    }
    async function getemployeetaskById(id)
    {
           const hrObject = await axios.get(`https://localhost:44393/api/GetEmployeeTasksById/${id}`);
           return hrObject ;
          
    }
   
 async function deletehr(id)
 {
        const deletehr = await axios.delete(`https://localhost:44393/api/DeleletEmployeeTaskById?id=${id}`);
       
 }
    const handleDelete = (id) => {

       Swal.fire({
              icon: 'warning',
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              showCancelButton: true,
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel!',
       }).then(result => {
              if (result.value) {

              Swal.fire({
                            icon: 'success',
                            title: 'Deleted!',
                            showConfirmButton: false,
                            timer: 2000,
                     });
                     deletehr(id);
                            
 
       setData(getAllemptask())
       setData(data.filter(employee => employee.taskId !== id));
       
              }

              else if (
                     /* Read more about handling dismissals below */
                     result.dismiss === Swal.DismissReason.cancel
                   ) {
                     Swal.fire(
                       'Cancelled',
                       'Your imaginary file is safe :)',
                       'error'
                     )
                   }
                   
              //      getAllemptask();

       });
      
  
       
       

      };
      async function updateEmployeeTaek(id,updatedData)
      {
             const updateEmployeeTaek = await axios.put(`https://localhost:44393/api/UpdateEmployeeTask/${id}`,updatedData);
             
            
      }
         const handleupdate = (id,updatedData) => {
            updateEmployeeTaek(id,updatedData);
            getAllemployeetast();
            
             
           };

    const valuetoshare = {data,getAllemployeetast,handleDelete,handleupdate,getemployeetaskById}  
    return <EmployeeTaskContext.Provider value={valuetoshare}>{children}</EmployeeTaskContext.Provider>
}



export default EmployeeTaskContext;
