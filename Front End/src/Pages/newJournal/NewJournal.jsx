import "./NewJournal.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useContext } from "react";
import AccountContext from "../../context/AccountContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NewJournal({ logOut }) {
  const { data, getAllaccount } = useContext(AccountContext);

  useEffect(() => {
    getAllaccount();
  }, []);

  const [journal, setjournal] = useState({
    jename: "",
    jedescription: "",
    jecredit: "",
    jedebit: "",
    jedate: "",
    jeaccount1: "",
    jeaccount2: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const journalData = { ...journal };

    journalData[e.target.name] = e.target.value;

    setjournal(journalData);
  };

  async function sendData() {
    const journalData = { ...journal };

    const res = await axios.post(
      `https://localhost:44393/api/AddNewFmsJournalEntry`,
      journalData
    );
        navigate("/journals");

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendData();
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `journal has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const newtempOrderOptions = data.map((temp) => {
    return (
      <option
        value={temp.accId}
        key={temp.accId}
        selected={journal.jeaccount1 === temp.accId}
      >
        Id: {temp.accId} -- Name: {temp.accName}
      </option>
    );
  });
  const newtempOrderOptions2 = data.map((temp) => {
    return (
      <option
        value={temp.accId}
        key={temp.accId}
        selected={journal.jeaccount2 === temp.accId}
      >
        Id: {temp.accId} -- Name: {temp.accName}
      </option>
    );
  });

  return (
    <div className="newProduct">
      <Sidebar />
      <div className="newContainer">
        <Navbar logOut={logOut} />
        <div className="container">
          <h1 className="addProductTitle">New Journal</h1>
          <form className="addProductForm" onSubmit={handleSubmit}>
            <div className="addProductItem">
              <label>Journal Name</label>
              <input
                type="text"
                name="jename"
                value={journal.jename}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <input
                type="text"
                name="jedescription"
                value={journal.jedescription}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Debit</label>
              <input
                type="number"
                name="jecredit"
                value={journal.jecredit}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Credit</label>
              <input
                type="number"
                name="jedebit"
                value={journal.jedebit}
                onChange={handleInputChange}
                placeholder=""
              />
            </div>
            <div className="addProductItem">
              <label>Credit Account</label>
              <select
                name="jeaccount1"
                value={journal.jeaccount1}
                onChange={handleInputChange}
              >
                <option value="">Select an Account</option>
                {newtempOrderOptions}
              </select>
            </div>
            <div className="addProductItem">
              <label>Debit Account</label>
              <select
                name="jeaccount2"
                value={journal.jeaccount2}
                onChange={handleInputChange}
              >
                <option value="">Select an Account</option>
                {newtempOrderOptions2}
              </select>
            </div>
            <div className="addProductItem">
              <label>Date</label>
              <input
                type="date"
                name="jedate"
                value={journal.jedate}
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

export default NewJournal;
