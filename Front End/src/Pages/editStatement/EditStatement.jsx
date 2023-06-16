import "./EditStatement.css";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import StatementContext from "../../context/StatementContext";
import Swal from "sweetalert2";


export default function EditStatement({logOut}) {
  const { staId } = useParams();
const navigate = useNavigate();
  const { handleupdate, returnStatementById } =
    useContext(StatementContext);

  const [stadata, setstadata] = useState({
    staName: "",
    staBalance: "",
    staDate: "",
    accounts:[]
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(staId, stadata);
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: `${stadata.staName} has been updated.`,
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/statement");

  };

  const handleChange = (e) => {
    const statementData = { ...stadata };

    statementData[e.target.name] = e.target.value;

    setstadata(statementData);
  };

  async function getStatement() {
    const statement = await returnStatementById(staId);

    setstadata(statement.data);
  }

  useEffect(() => {
    getStatement();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Statement</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Statement Name</label>
              <input
                type="text"
                name="staName"
                value={stadata.staName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Statement Balance</label>
              <input
                type="number"
                name="staBalance"
                value={stadata.staBalance}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Statement Date</label>
              <input
                type="date"
                name="staDate"
                value={stadata.staDate}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <button type="submit" className="addProductButton">
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
