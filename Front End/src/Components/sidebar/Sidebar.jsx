import React from "react";
import "./sidebar.scss";
import pic from "./logo.jpg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import TimelineIcon from '@mui/icons-material/Timeline';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import MovingIcon from '@mui/icons-material/Moving';
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddTaskIcon from '@mui/icons-material/AddTask'; import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CategoryIcon from '@mui/icons-material/Category';
import { DarkModeContext } from './../../context/darkModeContext';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TaskIcon from '@mui/icons-material/Task';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useContext } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">

        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo"> <img className="logo-img" src={pic} />
            ERP System</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <LineStyleIcon className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <p className="title">HR</p>

          <li>
            <Link to="/hrmanger" style={{ textDecoration: "none" }}>

              <AssignmentIndIcon className="icon" />
              <span>HRManager</span>
            </Link>
          </li>

          <li>
            <Link to="/employee" style={{ textDecoration: "none" }}>

              <GroupsIcon className="icon" />
              <span>Employees</span>
            </Link>
          </li>
          <li>
            <Link to="/employeetrain" style={{ textDecoration: "none" }}>

              <AutoModeIcon className="icon" />
              <span>EmployeeTrainning</span>
            </Link>
          </li>
          <li>
            <Link to="/employeetask" style={{ textDecoration: "none" }}>

              <AddTaskIcon className="icon" />
              <span>EmployeeTask</span>
            </Link>
          </li>
          <p className="title">SCM</p>

          <li>
            <Link to="/category" style={{ textDecoration: "none" }}>

              <CategoryIcon className="icon" /> <span>Category</span>
            </Link>
          </li>
          <li>
            <Link to="/rawmatrial" style={{ textDecoration: "none" }}>

              <AutoAwesomeMotionIcon className="icon" />
              <span>RawMaterial</span>
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>AllProducts</span>


            </Link>
          </li>


          <li>
            <Link to="/supplier" style={{ textDecoration: "none" }}>

              <MovingIcon className="icon" />
              <span>Suppliers</span>
            </Link>
          </li>

          <li>
            <Link to="/supplierorders" style={{ textDecoration: "none" }}>

              <CreditCardIcon className="icon" />
              <span>Supplier Orders</span>


            </Link>
          </li>
          <li>
            <Link to="/manufactur" style={{ textDecoration: "none" }}>

              <AcUnitIcon className="icon" />
              <span>Manufacturing</span>
            </Link>
          </li>


          <li>
            <Link to="/distributor" style={{ textDecoration: "none" }}>
              <LibraryAddCheckIcon className="icon" />
              <span>Distributors</span>
            </Link>
          </li>
          <li>
            <Link to="/distributororders" style={{ textDecoration: "none" }}>
              <MultipleStopIcon className="icon" />
              <span>Distribution Orders</span>
            </Link>
          </li>
          <p className="title">INVENTORY</p>

          <li>
            <Link to="/productsinventory" style={{ textDecoration: "none" }}>

              <AccountBalanceIcon className="icon" />
              <span>productsinventory</span>
            </Link>
          </li>
          <li>
            <Link to="/rawmatrialinventory" style={{ textDecoration: "none" }}>

              <Inventory2OutlinedIcon className="icon" />
              <span>RawMaterialInventory</span>
            </Link>
          </li>
          <p className="title">FMS</p>



          <li>
            <Link to="/journals" style={{ textDecoration: "none" }}>
              <MonitorHeartIcon className="icon" />
              <span>Journals</span>
            </Link>
          </li>

          <li>
            <Link to="/accounts" style={{ textDecoration: "none" }}>
              <AccountBalanceWalletIcon className="icon" />
              <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link to="/fmscategory" style={{ textDecoration: "none" }}>
              <CategoryOutlinedIcon className="icon" />
              <span>Fms Category</span>
            </Link>
          </li>
          <li>
            <Link to="/statement" style={{ textDecoration: "none" }}>
              <PriceChangeIcon className="icon" />
              <span>Statements</span>
            </Link>
          </li>
          <li>
            <Link to="/template" style={{ textDecoration: "none" }}>
              <AccountBalanceOutlinedIcon className="icon" />
              <span>Templates</span>
            </Link>
          </li>

          <p className="title">CRM</p>
          <li>
            <Link to="/customers" style={{ textDecoration: "none" }}>
              <SupportAgentIcon className="icon" />
              <span>Customers</span>
            </Link>
          </li>

          <li>
            <Link to="/customerTask" style={{ textDecoration: "none" }}>
              <TaskIcon className="icon" />
              <span>Tasks</span>
            </Link>
          </li>

          <li>
            <Link to="/customerTodos" style={{ textDecoration: "none" }}>
              <ListAltIcon className="icon" />
              <span>Todo Lists</span>
            </Link>
          </li>

        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  );
}

export default Sidebar;
