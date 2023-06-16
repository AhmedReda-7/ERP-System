import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widget from '../../Components/widget/Widget';
import "./home.scss";
import Feature from './../../Components/feature/Feature';
import Charts from './../../Components/Chart/Charts';
import Table  from './../../Components/table/Table';
const Home = ({logOut}) => {
  return (
    <div className='home'>
    
    <Sidebar/>
    <div className="homeContainer">
    
    <Navbar logOut={logOut}/>

    
 

    <div className='chart'>
    <iframe title="GP_ERP_BI" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=2b3684d2-ba63-4fb5-b4e1-3ee2dd8610c4&autoAuth=true&ctid=aadc0e0a-65ee-471a-99a1-9f86faecbaed" frameborder="0" allowFullScreen="true"></iframe>    </div>
    </div>
    </div>
  )
}

export default Home