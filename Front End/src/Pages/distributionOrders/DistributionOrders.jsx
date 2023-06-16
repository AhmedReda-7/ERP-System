import "./DistributionOrders.scss";
import { DataGrid } from "@mui/x-data-grid";
import { distributionOrdersCoulm } from "../../dummyData";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";
import { useEffect, useContext } from "react";
import DistributionOrdersContext from "../../context/DistributionOrdersContext";

export default function DistributionOrders() {
  const { getAllDistributionOrders, data } = useContext(DistributionOrdersContext);
  useEffect(() => {
    getAllDistributionOrders();
  }, []);

  const columnDistributionOrders = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/distributororders/view/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View and Update Status</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Distribution Orders
            <Link
              to="/distributororders/neworder"
              className="link"
            >
              Order
            </Link>
          </div>

          <DataGrid
            className="datagrid"
            getRowId={(row) => row.id}
            rows={data}
            columns={distributionOrdersCoulm.concat(columnDistributionOrders)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </div>
  );
}
