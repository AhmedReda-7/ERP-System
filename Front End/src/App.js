import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import {
  supplierMaterialInputs,
  supplierorderInputs,
  supplierInputs,
  categoryInputs,
  HrManagerInputs,
  EmployeeTrainInputs,
  EmployeetaskInputs,
  EmployeeInputs,
  productInputs,
  productinventoryInputs,
  rawmatrialInputs,
  rawmatrialinventoryInputs,
  manufacturInputs,
} from "./formSource";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import Overviewofsales from "./Pages/overviewforsales/Overviewofsales";
// import Daily from './Pages/dailyofsales/Daily';
// import Monthly from "./Pages/monthyofsales/Monthly";
import EmployeeList from "./Pages/employeelist/EmployeeList";
import ProductinventoryList from "./Pages/productsinventorylist/ProductinventoryList";
import Productinventory from "./Pages/productinventory/Productinventory";
import NewProductinventory from "./Pages/newproductinventory/NewProductinventory.jsx";
import CategoryList from "./Pages/categorylist/CategoryList.jsx";
import NewCategory from "./Pages/newcategory/NewCategory";
import Category from "./Pages/category/Category";
import RawMatrialList from "./Pages/rawmatrialList/RawMatrialList";
import Newmatrial from "./Pages/newmatrial/Newmatrial";
import RawMatrial from "./Pages/rawmatrial/RawMatrial.jsx";
import RawMatrialInventoryList from "./Pages/rawmatrialinventorylist/RawMatrialInventoryList.jsx";
import RawMatrialinventory from "./Pages/rawmatrialinventory/RawMatrialinventory";
import NewmatrialInventory from "./Pages/newmatrialinventory/NewmatrialInventory.jsx";
import ManufacturList from "./Pages/ManufacturList/ManufacturList";
import NewSupplierMatrial from "./Pages/NewSupplierMatrial/NewSupplierMatrial.jsx";
import NewSupplierorder from "./Pages/NewSupplierorder/NewSupplierorder";
import SupplierList from "./Pages/supplier/SupplierList";
import Supplier from "./Pages/supplieredit/Supplier";
import SupplierView from "./Pages/SupplierView/SupplierView";
import NewSupplier from "./Pages/NewSupplier/NewSupplier";
import SupplierordersList from "./Pages/supplierorderlist/SupplierordersList";
import { EmployeeContextProvider } from "./context/EmployeeContext";
import { CategoryContextProvider } from "./context/CategoryContext";
import { AllproductContextProvider } from "./context/AllproductContext";
import { ProductInventoryContextProvider } from "./context/ProductInventoryContext";
import { RawMatrialContextProvider } from "./context/RawMatrialContext";
import { RawMatrialInventoryContextProvider } from "./context/RawMatrialInventoryContext";
import { ManufactoringContextProvider } from "./context/ManufactoringContext";
import { SupplierorderContextProvider } from "./context/SupplierorderContext.jsx";
import NewManufactur from "./Pages/newmanufactur/NewManufactur";
import EmployeeView from "./Pages/employeeview/EmployeeView";
import ManufactureView from "./Pages/ManufctureOrder/ManufactureView";
import { SupplierContextProvider } from "./context/SupplierContext";
import SupplyOrderView from "./Pages/supporderview/SupplyOrderView";
import HrManagerList from "./Pages/hrmanagerlist/HrManagerList";
import HrManager from "./Pages/hrmanger/HrManager";
import HrManagerView from "./Pages/hrmanager-view/HrManagerView.jsx";
import NewHrManager from "./Pages/new-hrmanager/NewHrManager";
import Employee from "./Pages/Employee/Employee.jsx";
import NewEmployee from "./Pages/newemployee/NewEmployee.jsx";
import EmployeeTrainList from "./Pages/employeetrainlist/EmployeeTrainList.jsx";
import EmployeeTrain from "./Pages/EmployeeTrain/EmployeeTrain.jsx";
import EmployeeTrainView from "./Pages/EmployeeTrainView/EmployeeTrainView.jsx";
import NewEmployeeTrain from "./Pages/NewEmployeeTrain/NewEmployeeTrain.jsx";
import EmployeetaskList from "./Pages/employeetasklist/EmployeetaskList.jsx";
import Employeetask from "./Pages/employeetask/Employeetask.jsx";
import EmployeetaskView from "./Pages/employeetaskview/EmployeetaskView.jsx";
import NewEmployeetask from "./Pages/newemployeetask/NewEmployeetask.jsx";

import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import ProtectedRout from "./Pages/ProtectedRout/ProtectedRout.jsx";
import NotvalidScm from "./Pages/ProtectedRout/NotvalidScm";
import NotvalidInventory from "./Pages/ProtectedRout/NotvalidInventory";
import NotvalidHr from "./Pages/ProtectedRout/NotvalidHr";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { HrMangerContextProvider } from "./context/HrMangerContext";
import { EmployeeTrainingContextProvider } from "./context/EmployeeTrainingContext";
import { EmployeeTaskContextProvider } from "./context/EmployeeTaskContext";
import DistributionOrders from "./Pages/distributionOrders/DistributionOrders";
import ViewDistributionOrders from "./Pages/viewDistributionOrders/ViewDistributionOrders";
import NewDistributionOrders from "./Pages/newDistributionOrders/NewDistributionOrders";
import Distributor from "./Pages/distributor/Distributor";
import EditDistributor from "./Pages/editDistributor/EditDistributor";
import NewDistributor from "./Pages/newDistributor/NewDistributor";
import { DistributorContextProvider } from "./context/DistributorContext";
import { DistributionOrdersContextProvider } from "./context/DistributionOrdersContext";
import Journals from "./Pages/journals/Journals";
import EditJournal from "./Pages/editJournals/EditJournal";
import NewJournal from "./Pages/newJournal/NewJournal";
import Accounts from "./Pages/accounts/Accounts";
import ViewAccount from "./Pages/viewAccount/ViewAccount";
import EditAccount from "./Pages/editAccount/EditAccount";
import NewAccount from "./Pages/newAccount/NewAccount";
import { TemplateContextProvider } from "./context/TemplateContext";
import { StatementContextProvider } from "./context/StatementContext";
import { AccountContextProvider } from "./context/AccountContext";
import { FmsCategoryContextProvider } from "./context/FmsCategoryContext";
import { JournalContextProvider } from "./context/JournalContext";
import Statement from "./Pages/statement/Statement";
import ViewStatement from "./Pages/viewStatement/ViewStatement";
import EditStatement from "./Pages/editStatement/EditStatement";
import Template from "./Pages/template/Template";
import ViewTemplate from "./Pages/ViewTemplate/ViewTemplate";
import EditTemplate from "./Pages/editTemplate/EditTemplate";
import NewTemplate from "./Pages/newTemplate/NewTemplate";
import FmsCategory from "./Pages/fmsCategory/FmsCategory";
import FmsViewCategory from "./Pages/fmsViewCategory/FmsViewCategory";
import FmsNewCategory from "./Pages/fmsNewCategory/FmsNewCategory";
import FmsEditCategory from "./Pages/fmsEditCategory/FmsEditCategory";
import NotvalidFms from "./Pages/ProtectedRout/NotvalidFms";

import NewCustomer from "./Pages/newCustomer/NewCustomer";
import NewCustomerTask from "./Pages/newCustomerTask/NewCustomerTask";
import NewCustomerTodo from "./Pages/newCustomerTodo/NewCustomerTodo";
import EditCustomer from "./Pages/editCustomer/EditCustomer";
import EditCustomerTask from "./Pages/editCustomerTask/EditCustomerTask";
import EditCustomerTodo from "./Pages/editCustomerTodo/EditCustomerTodo";
import Customers from "./Pages/customers/Customers";
import CustomerTasks from "./Pages/customerTasks/CustomerTasks";
import CustomerTodos from "./Pages/customerTodos/CustomerTodos";
import { CustomerContextProvider } from "./context/CustomerContext";
import { CustomerTaskContextProvider } from "./context/CustomerTaskContext";
import { CustomerTodoContextProvider } from "./context/CustomerTodoContext";

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    console.log("====================================");
    console.log("error");
    console.log("====================================");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, (error) => {
  console.log("Error", error.message);
  if (error.message === "Request failed with status code 400") {
    if (window.location.href === "http://localhost:3000/") {
      toast.error("Email or Password Is Invalid");
    }
  }
  return Promise.reject(error);
});

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [userData, setuserData] = useState(null);
  const [userEmail, setuserEmail] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData();
    }

    console.log(localStorage.getItem("token"));
    setuserData(localStorage.getItem("token"));
  }, []);

  function saveUserData() {
    let encodedToken = localStorage.getItem("token");
    let email = localStorage.getItem("email");
    let decodedToken = jwtDecode(encodedToken);
    console.log(decodedToken);
    setuserData(decodedToken);
    setuserEmail(email);
  }

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setuserEmail(null);
    setuserData(null);
    return <Navigate to="/" />;
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <FmsCategoryContextProvider>
        <AccountContextProvider>
          <JournalContextProvider>
            <StatementContextProvider>
              <TemplateContextProvider>
                <DistributorContextProvider>
                  <DistributionOrdersContextProvider>
                    <EmployeeTaskContextProvider>
                      <EmployeeTrainingContextProvider>
                        <EmployeeContextProvider>
                          <HrMangerContextProvider>
                            <CategoryContextProvider>
                              <AllproductContextProvider>
                                <ProductInventoryContextProvider>
                                  <RawMatrialContextProvider>
                                    <RawMatrialInventoryContextProvider>
                                      <ManufactoringContextProvider>
                                        <SupplierContextProvider>
                                          <SupplierorderContextProvider>
                                            <CustomerContextProvider>
                                              <CustomerTaskContextProvider>
                                                <CustomerTodoContextProvider>
                                                  <ToastContainer />
                                                  <BrowserRouter>
                                                    <Routes>
                                                      <Route path="/">
                                                        <Route
                                                          index
                                                          element={
                                                            <Login
                                                              saveUserData={
                                                                saveUserData
                                                              }
                                                            />
                                                          }
                                                        />

                                                        <Route
                                                          path="home"
                                                          element={
                                                            <ProtectedRout
                                                              userdata={userData}
                                                            >
                                                              <Home logOut={logOut} />
                                                            </ProtectedRout>
                                                          }
                                                        />
                                                        <Route
                                                          path="error"
                                                          element={
                                                            <ProtectedRout
                                                              userdata={userData}
                                                            >
                                                              <ErrorPage
                                                                logOut={logOut}
                                                              />
                                                            </ProtectedRout>
                                                          }
                                                        />

                                                        <Route path="hrmanger">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <HrManagerList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":hrid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <HrManager
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:hrid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <HrManagerView
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newhrmanger"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NewHrManager
                                                                      logOut={logOut}
                                                                      inputs={
                                                                        HrManagerInputs
                                                                      }
                                                                      title="Add New HR-Manager"
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="employee">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <EmployeeList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":employeeid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <Employee
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:employeeid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <EmployeeView
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newemployee"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NewEmployee
                                                                      logOut={logOut}
                                                                      inputs={
                                                                        EmployeeInputs
                                                                      }
                                                                      title="Add New Employee"
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="employeetrain">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <EmployeeTrainList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":trainnningId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <EmployeeTrain
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:trainnningId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <EmployeeTrainView
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newemployeetrain"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NewEmployeeTrain
                                                                      logOut={logOut}
                                                                      inputs={
                                                                        EmployeeTrainInputs
                                                                      }
                                                                      title="Add New Employee-Training"
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="employeetask">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <EmployeetaskList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":employeetaskid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <Employeetask
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:employeetaskid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <EmployeetaskView
                                                                      logOut={logOut}
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newemployeetask"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NewEmployeetask
                                                                      logOut={logOut}
                                                                      inputs={
                                                                        EmployeetaskInputs
                                                                      }
                                                                      title="Add New Employee-Task"
                                                                    />
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="products">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <ProductList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":productId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <Product
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newproduct"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewProduct
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      productInputs
                                                                    }
                                                                    title="Add New Product"
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="productsinventory">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    {" "}
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <ProductinventoryList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>{" "}
                                                                </NotvalidScm>{" "}
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":productinventoryId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <Productinventory
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidScm>{" "}
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newproductinventory"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NewProductinventory
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      productinventoryInputs
                                                                    }
                                                                    title="Add New Product To Inventory"
                                                                  />
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="category">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <CategoryList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":categoryId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <Category
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newcategory"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewCategory
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      categoryInputs
                                                                    }
                                                                    title="Add New Category"
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="rawmatrial">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <RawMatrialList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":materialId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <RawMatrial
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newrawmatrial"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <Newmatrial
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      rawmatrialInputs
                                                                    }
                                                                    title="Add New Raw Material"
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="rawmatrialinventory">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <RawMatrialInventoryList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":rawmatrialinventoryId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <RawMatrialinventory
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidScm>{" "}
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newrawmatrialinventory"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewmatrialInventory
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      rawmatrialinventoryInputs
                                                                    }
                                                                    title="Add New Raw Material Inventory"
                                                                  />
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="manufactur">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <ManufacturList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:manufacturId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <ManufactureView
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newmanufactur"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewManufactur
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      manufacturInputs
                                                                    }
                                                                    title="Add New Manufacturing  "
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="supplier">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <SupplierList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":supplierId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <Supplier
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:supplierId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <SupplierView
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newsupply"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewSupplier
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      supplierInputs
                                                                    }
                                                                    title="Add New Supplier"
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newsupplymatrial/:suppliermatrialId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewSupplierMatrial
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      supplierMaterialInputs
                                                                    }
                                                                    title="Add New Supplying Material To Supplier "
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>

                                                        <Route path="supplierorders">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <SupplierordersList
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:supplierorderId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <SupplyOrderView
                                                                    logOut={logOut}
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newordersupply"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  <NewSupplierorder
                                                                    logOut={logOut}
                                                                    inputs={
                                                                      supplierorderInputs
                                                                    }
                                                                    title="Order Raw Material from Supplier"
                                                                  />
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="distributororders">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <DistributionOrders
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:id"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <ViewDistributionOrders
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="neworder"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewDistributionOrders
                                                                  logOut={logOut}
                                                                  inputs={
                                                                    supplierorderInputs
                                                                  }
                                                                  title="Order Raw Material from Supplier"
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="distributor">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidInventory
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidHr
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidFms
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <Distributor
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidFms>
                                                                  </NotvalidHr>
                                                                </NotvalidInventory>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":distributorId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <EditDistributor
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newDistributor"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewDistributor
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="journals">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                {" "}
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidHr
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <Journals
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidHr>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":jeid"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <EditJournal
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newjournal"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewJournal
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="accounts">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidHr
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <Accounts
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidHr>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:accId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <ViewAccount
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":accId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <EditAccount
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newaccount"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewAccount
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="category">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <CategoryList
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />

                                                          <Route
                                                            path=":catId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <Category
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newcategory"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewCategory
                                                                  logOut={logOut}
                                                                  inputs={
                                                                    categoryInputs
                                                                  }
                                                                  title="Add New Category"
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="statement">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidHr
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <Statement
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidHr>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:staId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <ViewStatement
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":staId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <EditStatement
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="template">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >
                                                                  {" "}
                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidHr
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <Template
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidHr>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:tempId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <ViewTemplate
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":tempId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <EditTemplate
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="newtemplate"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NewTemplate
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                        </Route>
                                                        <Route path="fmscategory">
                                                          <Route
                                                            index
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <NotvalidScm
                                                                  userEmail={
                                                                    userEmail
                                                                  }
                                                                >

                                                                  <NotvalidInventory
                                                                    userEmail={
                                                                      userEmail
                                                                    }
                                                                  >
                                                                    <NotvalidHr
                                                                      userEmail={
                                                                        userEmail
                                                                      }
                                                                    >
                                                                      <FmsCategory
                                                                        logOut={
                                                                          logOut
                                                                        }
                                                                      />
                                                                    </NotvalidHr>
                                                                  </NotvalidInventory>
                                                                </NotvalidScm>
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="view/:catId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <FmsViewCategory
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path=":catId"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <FmsEditCategory
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route
                                                            path="fmsnewcategory"
                                                            element={
                                                              <ProtectedRout
                                                                userdata={userData}
                                                              >
                                                                <FmsNewCategory
                                                                  logOut={logOut}
                                                                />
                                                              </ProtectedRout>
                                                            }
                                                          />
                                                          <Route path="customers">
                                                            <Route
                                                              index
                                                              element={<Customers />}
                                                            />
                                                            <Route
                                                              path=":customerId"
                                                              element={<EditCustomer />}
                                                            />
                                                            <Route
                                                              path="newCustomer"
                                                              element={<NewCustomer />}
                                                            />
                                                          </Route>

                                                          <Route path="customerTask">
                                                            <Route
                                                              index
                                                              element={<CustomerTasks />}
                                                            />
                                                            <Route
                                                              path=":taskId"
                                                              element={<EditCustomerTask />}
                                                            />
                                                            <Route
                                                              path="newCustomerTask"
                                                              element={<NewCustomerTask />}
                                                            />
                                                          </Route>

                                                          <Route path="customerTodos">
                                                            <Route
                                                              index
                                                              element={<CustomerTodos />}
                                                            />
                                                            <Route
                                                              path=":toDoListId"
                                                              element={<EditCustomerTodo />}
                                                            />
                                                            <Route
                                                              path="newCustomerTodo"
                                                              element={<NewCustomerTodo />}
                                                            />
                                                          </Route>
                                                        </Route>
                                                      </Route>
                                                    </Routes>
                                                  </BrowserRouter>
                                                </CustomerTodoContextProvider>
                                              </CustomerTaskContextProvider>
                                            </CustomerContextProvider>
                                          </SupplierorderContextProvider>
                                        </SupplierContextProvider>
                                      </ManufactoringContextProvider>
                                    </RawMatrialInventoryContextProvider>
                                  </RawMatrialContextProvider>
                                </ProductInventoryContextProvider>
                              </AllproductContextProvider>
                            </CategoryContextProvider>
                          </HrMangerContextProvider>
                        </EmployeeContextProvider>
                      </EmployeeTrainingContextProvider>
                    </EmployeeTaskContextProvider>
                  </DistributionOrdersContextProvider>
                </DistributorContextProvider>
              </TemplateContextProvider>
            </StatementContextProvider>
          </JournalContextProvider>
        </AccountContextProvider >
      </FmsCategoryContextProvider >
    </div >
  );
}

export default App;
