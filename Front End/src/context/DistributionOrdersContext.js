import { createContext, useState } from "react";
import axios from "axios";

const DistributionOrdersContext = createContext();

export function DistributionOrdersContextProvider({ children }) {
  const [data, setData] = useState([]);

  async function getAllDistributionOrders() {
    const allDistributionOrders = await axios.get(
      `https://localhost:44393/api/GetAllDistributionOrders`
    );
    setData(allDistributionOrders.data);
  }
  async function GetDistributionOrdersById(id) {
    const manuObject = await axios.get(
      `https://localhost:44393/api/GetDistributionOrderById/${id}`
    );
    return manuObject;
  }

  const valuetoshare = { data, getAllDistributionOrders, GetDistributionOrdersById };
  return (
    <DistributionOrdersContext.Provider value={valuetoshare}>
      {children}
    </DistributionOrdersContext.Provider>
  );
}

export default DistributionOrdersContext;
