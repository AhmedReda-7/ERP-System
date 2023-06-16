import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const HrMangerContext = createContext ();

export function HrMangerContextProvider({children})
{
    const [data, setData] = useState([]);

    async function getAllhrmanager()
    {
       const allhr = await axios.get(`https://localhost:44393/api/GetAllHRMangers`);



     setData(allhr.data);
    }
    async function getAllhr()
    {
     const allhr = await axios.get(`https://localhost:44393/api/GetAllHRMangers`);
//      console.log( allhr.data);
     return allhr.data;
    }
    async function getHrById(id)
    {
           const hrObject = await axios.get(`https://localhost:44393/api/GetHRManagerByID/${id}`);
           return hrObject ;
          
    }
   
 async function deletehr(id)
 {
        const deletehr = await axios.delete(`https://localhost:44393/api/DeleletHRManagerById?id=${id}`);
       
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
                            
 
       setData(getAllhr())
       setData(data.filter(employee => employee.hrid !== id));
       
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
                   
              //      getallhr();

       });
      
  
       
       

      };
      async function updateHR(id,updatedData)
      {
             const updateHR = await axios.put(`https://localhost:44393/api/UpdateHRManager/${id}`,updatedData);
             
            
      }
         const handleupdate = (id,updatedData) => {
            updateHR(id,updatedData);
            getAllhrmanager();
            
             
           };

    const valuetoshare = {data,getAllhrmanager,handleDelete,handleupdate,getHrById}  
    return <HrMangerContext.Provider value={valuetoshare}>{children}</HrMangerContext.Provider>
}



export default HrMangerContext;
