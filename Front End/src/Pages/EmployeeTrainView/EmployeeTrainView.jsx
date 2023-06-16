import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import EmployeeTrainingContext from "../../context/EmployeeTrainingContext";
import "./employeeTrainView.scss";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";


export default function EmployeeTrainView({logOut}) {
  const { trainnningId } = useParams();
  const { getEmpTrainById } = useContext(EmployeeTrainingContext);
  
  const [emptraindata, setEmptraindata] = useState({
    trainnningId: 0,
    hrName: "",
    employeeFullName: "",
    trainningType: "",
    trainningDescription: "",
    employeeId: 0,
    hrid: 0

  });

  console.log("fffffffffff",emptraindata.hrName);
  async function getmanufacture() {
    const manufacture = await getEmpTrainById(trainnningId);
    // console.log("====================================");
    console.log("dddddddddddddd",manufacture);
    // console.log("====================================");
    setEmptraindata(manufacture.data);
  }

  useEffect(() => {
    getmanufacture();
  }, []);
  
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="manufactur">
          <div className="manufacturTitleContainer">
            <h1 className="manufacturTitle">Employee-Training</h1>
            <Link to="/employeetrain/newemployeetrain">
              <button className="manufacturAddButton">Create</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
                <p className="categoryName">
                  <span className="spanform">trainnningId: </span>
                  {emptraindata.trainnningId}
                </p>
                <p className="categoryName">
                  <span className="spanform">hrName: </span>
                  {emptraindata.hrName}
                </p>
                <p className="categoryName">
                  <span className="spanform">employeeFullName: </span>
                  {emptraindata.employeeFullName}
                </p>
                <p className="categoryName">
                  <span className="spanform">trainningType: </span>
                  {emptraindata.trainningType}
                </p>
                <p className="categoryName">
                  <span className="spanform">trainningDescription: </span>
                  {emptraindata.trainningDescription}
                </p>
                <p className="categoryName">
                  <span className="spanform">employeeId: </span>
                  {emptraindata.employeeId}
                </p>
                <p className="categoryName">
                  <span className="spanform">hrId: </span>
                  {emptraindata.hrid}
                </p>
               

              </div>
             
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
