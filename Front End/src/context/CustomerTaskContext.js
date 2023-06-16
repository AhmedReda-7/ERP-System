import { createContext, useState } from "react";
import Swal from "sweetalert2";//
import axios from "axios";

const CustomerTaskContext = createContext();

export function CustomerTaskContextProvider({ children }) {
  const [data, setData] = useState([]);

  async function GetAllCustomerTasks() {
    const AllCustomerTasks = await axios.get(
      `https://localhost:44393/api/GetAllCustomerTasks`
    );

    setData(AllCustomerTasks.data);
  }

  async function GetAllCustomerTasksdel() {
    const AllCustomerTasks = await axios.get(
      `https://localhost:44393/api/GetAllCustomerTasks`);
    return AllCustomerTasks.data;
  }//

  async function GetCustomerTaskById(id) {
    const CustomerTaskObject = await axios.get(
      `https://localhost:44393​/api​/GetCustomerTasksById​/${id}`
    );

    return CustomerTaskObject;
  }

  async function DeleteCustomerTask(id) {
    const DeleteCustomerTask = await axios.delete(
      `https://localhost:44393/api/DeleletCustomerTaskById/${id}`
    );
  }

  /*const handleDelete = (id) => {
    DeleteCustomerTask(id);

    GetAllCustomerTasks();
  };*/

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



        DeleteCustomerTask(id);
        setData(GetAllCustomerTasksdel())
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
    });
  };

  async function UpdateCustomerTask(id, updatedData) {
    const UpdateCustomerTask = await axios.put(
      `https://localhost:44393/api/UpdateCustomerTask/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    UpdateCustomerTask(id, updatedData);

    GetAllCustomerTasks();
  };

  const valuetoshare = {
    data,
    GetAllCustomerTasks,
    handleDelete,
    handleupdate,
    GetCustomerTaskById,
  };
  return (
    <CustomerTaskContext.Provider value={valuetoshare}>
      {children}
    </CustomerTaskContext.Provider>
  );
}

export default CustomerTaskContext;