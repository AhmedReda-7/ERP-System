import { createContext, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

const FmsCategoryContext = createContext();

export function FmsCategoryContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [category1, setcategory] = useState([]);
  const [detailData, setDetailData] = useState({
    catId: "",
    catDescription: category1.catDescription,
    catName: category1.catName,
  });

  async function getAllcategory() {
    const allcategory = await axios.get(
      `https://localhost:44393/api/FmsGetAllCategories`
    );

    setData(allcategory.data);
  }

  async function getCategoryById(id) {
    const categoryObject = await axios.get(
      `https://localhost:44393/api/FmsGetCategoryById/${id}`
    );

    setDetailData(categoryObject.data);
    setcategory(categoryObject.data);
  }

  async function deleteCategory(id) {
    const deletedCategory = await axios.delete(
      `https://localhost:44393/api/FmsDeleteCategory?id=${id}`
    );
  }
  async function getAllcatdel() {
    const allcat = await axios.get(
      `https://localhost:44393/api/FmsGetAllCategories`
    );
    return allcat.data;
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

        deleteCategory(id);
        setData(getAllcatdel());
        setData(data.filter((employee) => employee.catId !== id));
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  async function updateCategory(id, updatedData) {
    const updatedCategory = await axios.put(
      `https://localhost:44393/api/FmsUpdateCategory/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateCategory(id, updatedData);

    getAllcategory();
  };
  async function returnCategoryById(id) {
    const categoryObject = await axios.get(
      `https://localhost:44393/api/FmsGetCategoryById/${id}`
    );
    return categoryObject;
  }
  const valuetoshare = {
    data,
    detailData,
    category1,
    getAllcategory,
    handleDelete,
    handleupdate,
    getCategoryById,
    returnCategoryById,
  };
  return (
    <FmsCategoryContext.Provider value={valuetoshare}>
      {children}
    </FmsCategoryContext.Provider>
  );
}

export default FmsCategoryContext;
