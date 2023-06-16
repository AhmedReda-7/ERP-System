import "./FmsNewCategory.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function FmsNewCategory({logOut}) {
  const [category, setcategory] = useState({
    catName: "",
    catDescription: "",
  });
const navigate = useNavigate();
  const handleInputChange = (e) => {
    const categoryData = { ...category };

    categoryData[e.target.name] = e.target.value;

    setcategory(categoryData);
  };

  async function sendData() {
    const categoryData = { ...category };

    const res = await axios.post(
      `https://localhost:44393/api/FmsAddCategory`,
      categoryData
    );
    navigate("/fmscategory");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `distributor has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">New category</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Category Name</label>
              <input
                type="text"
                name="catName"
                value={category.catName}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="catDescription"
                value={category.catDescription}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FmsNewCategory;