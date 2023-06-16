import { createContext, useState  } from 'react';
import axios  from 'axios';
import Swal from 'sweetalert2';


const EmployeeTrainingContext = createContext ();

export function EmployeeTrainingContextProvider({children})
{
    const [data, setData] = useState([]);

    async function getAllEmpTrainning()
    {
       const allhr = await axios.get(`https://localhost:44393/api/GetAllTrainingEmployee`);



     setData(allhr.data);
    }
    async function getAllemptrain()
    {
     const allhr = await axios.get(`https://localhost:44393/api/GetAllTrainingEmployee`);
//      console.log( allhr.data);
     return allhr.data;
    }
    async function getEmpTrainById(id)
    {
           const hrObject = await axios.get(`https://localhost:44393/api/GetEmployeeTrainingById/${id}`);
           console.log(hrObject);
           return hrObject ;
          
    }
   
 async function deleteEmpTrain(id)
 {
        const deleteEmpTrain = await axios.delete(`https://localhost:44393/api/DeleletEmployeeTrainningById?id=${id}`);
       
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
                     deleteEmpTrain(id);
                            
 
       setData(getAllemptrain())
       setData(data.filter(employee => employee.trainnningId !== id));
       
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
                   
              //      getAllemptrain();

       });
      
  
       
       

      };
      async function updateEmpTrain(id,updatedData)
      {
             const updateEmpTrain = await axios.put(`https://localhost:44393/api/UpdateTrainnig/${id}`,updatedData);
             
            
      }
         const handleupdate = (id,updatedData) => {
            updateEmpTrain(id,updatedData);
            getAllEmpTrainning();
            
             
           };

    const valuetoshare = {data,getAllEmpTrainning,handleDelete,handleupdate,getEmpTrainById}  
    return <EmployeeTrainingContext.Provider value={valuetoshare}>{children}</EmployeeTrainingContext.Provider>
}



export default EmployeeTrainingContext;
