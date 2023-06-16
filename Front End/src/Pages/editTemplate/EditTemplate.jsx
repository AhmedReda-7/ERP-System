import "./EditTemplate.css";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import TemplateContext from "../../context/TemplateContext";
import Swal from "sweetalert2";


export default function EditTemplate({logOut}) {
  const { tempId } = useParams();

  const { handleupdate, returnTemplateById } = useContext(TemplateContext);
const navigate = useNavigate();
  const [tempdata, settempdata] = useState({
    tempName: "",
    tempDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(tempId, tempdata);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${tempdata.tempName} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/template");
  };

  const handleChange = (e) => {
    const templateData = { ...tempdata };

    templateData[e.target.name] = e.target.value;

    settempdata(templateData);
  };

  async function getTemplate() {
    const template = await returnTemplateById(tempId);

    settempdata(template.data);
  }

  useEffect(() => {
    getTemplate();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Template</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Template Name</label>
              <input
                type="text"
                name="tempName"
                value={tempdata.tempName}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Template Date</label>
              <input
                type="date"
                name="tempDate"
                value={tempdata.tempDate}
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
