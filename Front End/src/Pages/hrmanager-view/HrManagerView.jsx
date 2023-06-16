import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import HrMangerContext from "../../context/HrMangerContext";
import "./hrview.scss";
import Navbar from "./../../Components/navbar/Navbar";
import Sidebar from "./../../Components/sidebar/Sidebar";


export default function HrManagerView({logOut}) {
  const { hrid } = useParams();
  const { getHrById } = useContext(HrMangerContext);
  
  const [hrdata, setHrdata] = useState({
    hrfullName: "string",
  });
  console.log(hrdata.hrfullName);

  async function getmanufacture() {
    const manufacture = await getHrById(hrid);
    // console.log("====================================");
    // console.log(manufacture);
    // console.log("====================================");
    setHrdata(manufacture.data);
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
            <h1 className="manufacturTitle">HR Manager</h1>
            <Link to="/hrmanger/newhrmanger">
              <button className="manufacturAddButton">Create</button>
            </Link>
          </div>
          <div className="manufacturTop">
            <div className="manufacturTopRight">
              <div className="manufacturInfoTop">
                <p className="categoryName">
                  <span className="spanform">hrfullName: </span>
                  {hrdata.hrfullName}
                </p>
               

              </div>
             
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
