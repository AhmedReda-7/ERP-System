import { createContext, useState } from "react";

import axios from "axios";

const AccountContext = createContext();

export function AccountContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [account, setAccount] = useState({});
  const [detailData, setDetailData] = useState({
    accId: "",
    accBalance: account.accBalance,
    accDebit: account.accDebit,
    accCredit: account.accCredit,
    accName: account.accName,
    increaseMode: account.increaseMode,
  });

  async function getAllaccount() {
    const allaccount = await axios.get(
      `https://localhost:44393/api/FmsGetAllAccounts`
    );

    setData(allaccount.data);
  }

  async function getAccountById(id) {
    const accountObject = await axios.get(
      `https://localhost:44393/api/FmsGetAccountById/${id}`
    );

    setDetailData(accountObject.data);
    setAccount(accountObject.data);
  }
  async function returnAccountById(id) {
    const accountObject = await axios.get(
      `https://localhost:44393/api/FmsGetAccountById/${id}`
    );

    return accountObject;
  }

  async function deleteAccount(id) {
    const deletedAccount = await axios.delete(
      `https://localhost:44393/api/FmsDeleteAccount?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteAccount(id);

    getAllaccount();
  };

  async function updateAccount(id, updatedData) {
    const updatedAccount = await axios.put(
      `https://localhost:44393/api/FmsUpdateAccount/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateAccount(id, updatedData);

    getAllaccount();
  };

  const valuetoshare = {
    data,
    detailData,
    account,
    getAllaccount,
    handleDelete,
    handleupdate,
    getAccountById,
    returnAccountById,
  };
  return (
    <AccountContext.Provider value={valuetoshare}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountContext;
