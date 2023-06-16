import "./EditJournal.css";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import JournalContext from "../../context/JournalContext";
import Swal from "sweetalert2";


export default function EditJournal({logOut}) {
  const { jeid } = useParams();

  const { handleupdate, getJournalById } = useContext(JournalContext);
const navigate = useNavigate();
  const [jedata, setjedata] = useState({
    jename: "",
    jedescription: "",
    jecredit: "",
    jedebit: "",
    jedate: "",
    jeaccount1: "",
    jeaccount2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    handleupdate(jeid, jedata);
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${jedata.jename} has been updated.`,
      showConfirmButton: false,
      timer: 2000,
    });
    navigate("/journals");
  };

  const handleChange = (e) => {
    const journalData = { ...jedata };

    journalData[e.target.name] = e.target.value;

    setjedata(journalData);
  };

  async function getJournal() {
    const journal = await getJournalById(jeid);

    setjedata(journal.data);
  }

  useEffect(() => {
    getJournal();
  }, []);

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">Edit Journal</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Journal Name</label>
              <input
                type="text"
                name="jename"
                value={jedata.jename}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="jedescription"
                value={jedata.jedescription}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Debit</label>
              <input
                type="number"
                name="jedebit"
                value={jedata.jedebit}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Credit</label>
              <input
                type="number"
                name="jecredit"
                value={jedata.jecredit}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            {/* <div className="addProductItem">
              <label>Credit Account</label>
              <input
                type="number"
                name="jeaccount1"
                value={jedata.jeaccount1}
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Deibt Account</label>
              <input
                type="number"
                name="jeaccount2"
                value={jedata.jeaccount2}
                onChange={handleChange}
                placeholder=""
              />
            </div> */}
            <div className="addProductItem">
              <label>Date</label>
              <input
                type="date"
                name="jedate"
                value={jedata.jedate}
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