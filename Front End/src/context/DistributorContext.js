import { createContext, useState } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const DistributorContext = createContext();

export function DistributorContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [productData, setproductData] = useState([]);

  async function getAlldistributor() {
    const alldistributor = await axios.get(
      `https://localhost:44393/api/GetAllDistributors`
    );

    setData(alldistributor.data);
  }

  async function getDistributorById(id) {
    const distributorObject = await axios.get(
      `https://localhost:44393/api/GetDirstributorById/${id}`
    );

    setDetailData(distributorObject.data);
  }
  async function returnDistributorById(id) {
    const distributorObject = await axios.get(
      `https://localhost:44393/api/GetDirstributorById/${id}`
    );

    return distributorObject;
  }

  async function deleteDistributor(id) {
    const deleteddistributor = await axios.delete(
      `https://localhost:44393/api/DeleteDistributor?id=${id}`
    );
  }

  async function getAlldistdel() {
    const alldist = await axios.get(
      `https://localhost:44393/api/GetAllDistributors`
    );
    return alldist.data;
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          showConfirmButton: false,
          timer: 2000,
        });

        deleteDistributor(id);
        setData(getAlldistdel());
        setData(data.filter((employee) => employee.distributorId !== id));
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  async function updateDistributor(id, updatedData) {
    const updateddistributor = await axios.put(
      `https://localhost:44393/api/UpdateDistributor/${id}`,
      updatedData
    );
  }
  async function getDistributorProduct() {
    const DistributorProduct = await axios.get(
      `https://localhost:44393/api/GetAllProducts`
    );
    setproductData(DistributorProduct.data);
  }

  const handleupdate = (id, updatedData) => {
    updateDistributor(id, updatedData);
    getAlldistributor();
  };

  const valuetoshare = {
    data,
    detailData,
    productData,
    getAlldistributor,
    handleDelete,
    handleupdate,
    getDistributorById,
    getDistributorProduct,
    returnDistributorById,
  };
  return (
    <DistributorContext.Provider value={valuetoshare}>
      {children}
    </DistributorContext.Provider>
  );
}

export default DistributorContext;
