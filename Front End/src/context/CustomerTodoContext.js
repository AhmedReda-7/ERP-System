import { createContext, useState } from "react";
import Swal from "sweetalert2";//
import axios from "axios";

const CustomerTodoContext = createContext();

export function CustomerTodoContextProvider({ children }) {
  const [data, setData] = useState([]);

  async function GetAllCustomerTodos() {
    const AllCustomerTodos = await axios.get(
      `https://localhost:44393/api/GetAllCustomersToDoList`
    );

    setData(AllCustomerTodos.data);
  }

  async function GetAllCustomerTodosdel() {
    const AllCustomerTodos = await axios.get(
      `https://localhost:44393/api/GetAllCustomersToDoList`);
    return AllCustomerTodos.data;
  }//

  async function GetCustomerTodoById(id) {
    const CustomerTodoObject = await axios.get(
      `https://localhost:44393/api/GetCustomersToDoListsById/${id}`
    );

    return CustomerTodoObject;
  }

  async function DeleteCustomerTodo(id) {
    const DeleteCustomerTodo = await axios.delete(
      `https://localhost:44393/api/DeleletCustomerTODoListById/${id}`
    );
  }

  /*const handleDelete = (id) => {
    DeleteCustomerTodo(id);

    GetAllCustomerTodos();
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



        DeleteCustomerTodo(id);
        setData(GetAllCustomerTodosdel())
        setData(data.filter(employee => employee.toDoListId !== id));




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

  async function UpdateCustomerTodo(id, updatedData) {
    const UpdateCustomerTodo = await axios.put(
      `https://localhost:44393/api/UpdateCustomerToDoList/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    UpdateCustomerTodo(id, updatedData);

    GetAllCustomerTodos();
  };

  const valuetoshare = {
    data,
    GetAllCustomerTodos,
    handleDelete,
    handleupdate,
    GetCustomerTodoById,
  };
  return (
    <CustomerTodoContext.Provider value={valuetoshare}>
      {children}
    </CustomerTodoContext.Provider>
  );
}

export default CustomerTodoContext;