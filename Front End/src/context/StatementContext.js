import { createContext, useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

const StatementContext = createContext();

export function StatementContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [statement, setstatement] = useState({});
  const [detailData, setDetailData] = useState({
    staId: "",
    staBalance: statement.staBalance,
    staName: statement.staName,
    staDate: statement.staDate,
  });

  async function getAllstatement() {
    const allstatement = await axios.get(
      `https://localhost:44393/api/FmsGetAllStatements`
    );

    setData(allstatement.data);
  }

  async function getStatementById(id) {
    const statementObject = await axios.get(
      `https://localhost:44393/api/FmsGetStatementById/${id}`
    );

    setDetailData(statementObject.data);
    setstatement(statementObject.data);
  }

  async function deleteStatement(id) {
    const deletedStatement = await axios.delete(
      `https://localhost:44393/api/FmsDeleteStatement?id=${id}`
    );
  }

  async function getAlldistdel() {
    const alldist = await axios.get(
      `https://localhost:44393/api/FmsGetAllStatements`
    );
    return alldist.data;
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          showConfirmButton: false,
          timer: 2000,
        });

        deleteStatement(id);
        setData(getAlldistdel());
        setData(data.filter((employee) => employee.staId !== id));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };

  async function updateStatement(id, updatedData) {
    const updatedStatement = await axios.put(
      `https://localhost:44393/api/FmsUpdateStatement/${id}`,
      updatedData
    );
  }
  async function returnStatementById(id) {
    const statementObject = await axios.get(
      `https://localhost:44393/api/FmsGetStatementById/${id}`
    );

    return statementObject;
  }

  const handleupdate = (id, updatedData) => {
    updateStatement(id, updatedData);

    getAllstatement();
  };

  const valuetoshare = {
    data,
    detailData,
    statement,
    getAllstatement,
    handleDelete,
    handleupdate,
    getStatementById,
    returnStatementById,
  };
  return (
    <StatementContext.Provider value={valuetoshare}>
      {children}
    </StatementContext.Provider>
  );
}

export default StatementContext;
