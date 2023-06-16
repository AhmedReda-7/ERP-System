import "./newemployee.scss";
import Sidebar from "./../../Components/sidebar/Sidebar";
import Navbar from "./../../Components/navbar/Navbar";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HrMangerContext from "../../context/HrMangerContext";

function NewEmployee({ inputs, title, logOut }) {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const { getAllhrmanager, data } = useContext(HrMangerContext);

  const [emp, setEmp] = useState({
    employeeFullName: "string",
    taxWithholding: 0,
    hoursWorked: 0,
    dateOfJoining: "2023-05-30T15:18:52.299Z",
    attendenceTime: "2023-05-30T15:18:52.299Z",
    holidays: "2023-05-30T15:18:52.299Z",
    employeeSalary: 0,
    hrid: 0
  });
  console.log(emp);
  const productInvOptions = data?.map((product) => {
    return (
      <option value={product.hrid} key={product.hrid}>
        {product.hrid} - {product.hrfullName}
      </option>
    );
  });
  useEffect(() => {
    getAllhrmanager();
  }, [emp]);
  const handleInputChange = (e) => {
    const empData = { ...emp };
    empData[e.target.name] = e.target.value;
    setEmp(empData);
  };
  async function sendData() {
    const empData = { ...emp };
    const res = await axios.post(
      `https://localhost:44393/api/AddNewEmployee`,
      empData
    );
    navigate("/employee");

    // console.log('====================================');
    // console.log(res);
    // console.log('====================================');
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${emp.employeeFullName} has been Added.`,
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div className="newrawmatrial">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="" style={{ display: "flex", gap: "15px" }}>
                <label htmlFor="hrid">Choose HR-Manager:</label>
                <select name="hrid" id="hrid" onChange={handleInputChange}>
                  {productInvOptions}
                </select>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    onChange={handleInputChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewEmployee;
