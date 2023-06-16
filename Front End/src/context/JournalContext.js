import { createContext, useState } from "react";

import axios from "axios";

const JournalContext = createContext();

export function JournalContextProvider({ children }) {
  const [data, setData] = useState([]);

  async function getAlljournal() {
    const alljournal = await axios.get(
      `https://localhost:44393/api/GetAllJournals`
    );

    setData(alljournal.data);
  }

  async function getJournalById(id) {
    const journalObject = await axios.get(
      `https://localhost:44393/api/GetFmsJournalEntryById/${id}`
    );

    return journalObject;
  }

  async function deleteJournal(id) {
    const deletedJournal = await axios.delete(
      `https://localhost:44393/api/DeleteFmsJournalEntry?id=${id}`
    );
  }

  const handleDelete = (id) => {
    deleteJournal(id);

    getAlljournal();
  };

  async function updateJournal(id, updatedData) {
    const updatedJournal = await axios.put(
      `https://localhost:44393/api/UpdateFmsJournalEntry/${id}`,
      updatedData
    );
  }

  const handleupdate = (id, updatedData) => {
    updateJournal(id, updatedData);

    getAlljournal();
  };

  const valuetoshare = {
    data,
    getAlljournal,
    handleDelete,
    handleupdate,
    getJournalById,
  };
  return (
    <JournalContext.Provider value={valuetoshare}>
      {children}
    </JournalContext.Provider>
  );
}

export default JournalContext;
