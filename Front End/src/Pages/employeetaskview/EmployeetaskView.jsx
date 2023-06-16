import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import EmployeeTaskContext from "../../context/EmployeeTaskContext";
import "./emptaskview.scss";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";


export default function EmployeetaskView({logOut}) {
  const { employeetaskid } = useParams();
  const { getemployeetaskById } = useContext(EmployeeTaskContext);
  
  const [emptaskdata, setEmptaskdata] = useState({
    taskId: 0,
    employeeFullName: "",
    bounsHours: 0,
    taskDescription: "string",
    taskAssignedTime: "2023-05-19T07:59:51.987",
    taskDeadlineTime: "2023-05-19T07:59:51.987",
    emplyeeId: 0
  });

  async function getemployeetask() {
    const manufacture = await getemployeetaskById(employeetaskid);
    // console.log("====================================");
    // console.log(manufacture);
    // console.log("====================================");
    setEmptaskdata(manufacture.data);
  }

  useEffect(() => {
    getemployeetask();
  }, []);
  
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
      <Navbar logOut={logOut}/>
      <div className="manufactur">
          <div className="manufacturTitleContainer">
            <h1 className="manufacturTitle">Employee Task</h1>
            <Link to="/employeetask/newemployeetask">
              <button className="manufacturAddButton">Create</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
                <p className="categoryName">
                  <span className="spanform">taskId: </span>
                  {emptaskdata.taskId}
                </p>
                <p className="categoryName">
                  <span className="spanform">employeeFullName: </span>
                  {emptaskdata.employeeFullName}
                </p>
                <p className="categoryName">
                  <span className="spanform">bounsHours: </span>
                  {emptaskdata.bounsHours}
                </p>
                <p className="categoryName">
                  <span className="spanform">taskDescription: </span>
                  {emptaskdata.taskDescription}
                </p>
                <p className="categoryName">
                  <span className="spanform">taskAssignedTime: </span>
                  {emptaskdata.taskAssignedTime}
                </p>
                <p className="categoryName">
                  <span className="spanform">taskDeadlineTime: </span>
                  {emptaskdata.taskDeadlineTime}
                </p>
                <p className="categoryName">
                  <span className="spanform">emplyeeId: </span>
                  {emptaskdata.emplyeeId}
                </p>
               

              </div>
             
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
