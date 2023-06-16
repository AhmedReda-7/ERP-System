import { createContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const CustomerContext = createContext();

export function CustomerContextProvider({ children }) {
  const [data, setData] = useState([]);

  const [customer, setcustomerdata] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    sex: "",
    age: "",
  });

  async function GetAllCustomers() {
    const AllCustomers = await axios.get(
      `https://localhost:44393/api/GetAllCustomers`
    );

    setData(AllCustomers.data);
  }

  async function GetAllCustomersdel() {
    const AllCustomers = await axios.get(
      `https://localhost:44393/api/GetAllCustomers`);
    return AllCustomers.data;
  }//

  async function GetCustomerById(id) {
    const CustomerObject = await axios.get(
      `https://localhost:44393/api/GetCutomerrByID/${id}`
    );

    return CustomerObject;
  }

  async function DeleteCustomer(id) {
    const DeleteCustomer = await axios.delete(
      `https://localhost:44393/api/DeleletCustomerById/${id}`
    );
  }

  /*const handleDelete = (id) => {
    DeleteCustomer(id);

    GetAllCustomers();
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



        DeleteCustomer(id);
        setData(GetAllCustomersdel())
        setData(data.filter(employee => employee.customerId !== id));




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
  };//

  async function UpdateCustomer(id, updatedData) {
    const UpdateCustomer = await axios.put(
      `https://localhost:44393/api/EditCustomerProfile/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    UpdateCustomer(id, updatedData);

    GetAllCustomers();
  };

  const valuetoshare = {
    data,
    GetAllCustomers,
    handleDelete,
    handleupdate,
    GetCustomerById,
  };
  return (
    <CustomerContext.Provider value={valuetoshare}>
      {children}
    </CustomerContext.Provider>
  );
}

export default CustomerContext;