import "./ViewAccount.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { accountCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import AccountContext from "../../context/AccountContext";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ViewAccount({logOut}) {
  const { accId } = useParams();
  const { detailData, getAccountById, handleDelete, account } =
    useContext(AccountContext);
console.log(account);
  useEffect(() => {
    getAccountById(accId);
  }, [accId]);

  const columnsaccount = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/accounts/" + params.row.accId}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row.accId)}
            />
          </div>
        );
      },
    },
  ];

  const [category, setcategory] = useState({
    catId: "",
    accId: accId,
  });

  const [AccountCategories, setAccountCategories] = useState([]);

  const handleInputChange = (e) => {
    const categoryData = { ...category };

    categoryData[e.target.name] = e.target.value;

    setcategory(categoryData);
  };

  async function sendData() {
    const categoryData = { ...category };

    const res = await axios.post(
      `https://localhost:44393/api/FmsAddAccCat?accID=${accId}&catID=${categoryData.catId}`,
      categoryData
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `category has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  async function getAllAccountCategories() {
    const accountObject = await axios.get(
      `https://localhost:44393/api/FmsGetAccountCategories?accID=${accId}`
    );

    setAccountCategories(accountObject.data);
    
  }

  useEffect(() => {
    getAllAccountCategories();
  }, []);

  const [categories, setCategories] = useState([]);

  async function getAllCategories() {
    const response = await axios.get(
      `https://localhost:44393/api/FmsGetAllCategories`
    );
    setCategories(response.data);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  const renderCategoryOptions = () => {
    return categories.map((category) => (
      <option key={category.catId} value={category.catId}>
        {category.catName}
      </option>
    ));
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar logOut={logOut} />
        <div className="datatable2">
          <div className="datatableTitle">
            Account Name: {detailData.accName}
            <br></br>
            Account Id: {accId}
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.accId}
            rows={[detailData]}
            columns={accountCoulm.concat(columnsaccount)}
            pageSize={1}
            rowsPerPageOptions={[1]}
            disableSelectionOnClick
          />
        </div>

        <br></br>
        <br></br>
        <div className="container">
          <h1 className="addProductTitle">New category</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Categorys</label>
              <select
                name="catId"
                value={category.catId}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {renderCategoryOptions()}
              </select>
            </div>

            <button className="addProductButton">Add Category</button>
          </form>
        </div>
        <div className="catdev">
          <h2>
            this Account is Listed in {AccountCategories.length} Categories :
          </h2>
          {AccountCategories.map((category, index) => (
            <div key={category.catId} className="AccountCategories">
              <h3> Category Id: {category.catId} -</h3>
              <br />
              <h3>- Name: {account.accCategories[index]} </h3>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
