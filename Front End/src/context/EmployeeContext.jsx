import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const EmployeeContext = createContext ();

export function EmployeeContextProvider({children})
{
    const [dataemp, setDataemp] = useState([]);

    async function getAllemployee()
    {
       const allemployee = await axios.get(`https://localhost:44393/api/GetAllEmployee`);



     setDataemp(allemployee.data);
    }
    async function getAllemp()
    {
     const allemployee = await axios.get(`https://localhost:44393/api/GetAllEmployee`);
//      console.log( allemployee.data);
     return allemployee.data;
    }
    async function getEmployeeById(id)
    {
           const employeeObject = await axios.get(`https://localhost:44393/api/GetEmployeeById/${id}`);
           return employeeObject ;
          
    }
   
 async function deleteemployee(id)
 {
        const deleteemployee = await axios.delete(`https://localhost:44393/api/DeleletHRManagerById?id=${id}`);
       
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
                     deleteemployee(id);
                            
 
       setDataemp(getAllemp())
       setDataemp(dataemp.filter(employee => employee.employeeId !== id));
       
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
                   
              //      getAllemp();

       });
      
  
       
       

      };
      async function updateEmployee(id,updatedData)
      {
             const updateEmployee = await axios.put(`https://localhost:44393/api/UpdateEmployee/${id}`,updatedData);
             
            
      }
         const handleupdate = (id,updatedData) => {
            updateEmployee(id,updatedData);
            getAllemployee();
            
             
           };

    const valuetoshare = {dataemp,getAllemployee,handleDelete,handleupdate,getEmployeeById}  
    return <EmployeeContext.Provider value={valuetoshare}>{children}</EmployeeContext.Provider>
}



export default EmployeeContext;
