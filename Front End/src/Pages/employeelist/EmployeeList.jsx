import "./employeelist.scss"
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import Datatable from '../../Components/datatable/Datatable';


const EmployeeList = ({logOut}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar logOut={logOut}/>
         <Datatable/>
      </div>
    </div>
  )
}

export default EmployeeList