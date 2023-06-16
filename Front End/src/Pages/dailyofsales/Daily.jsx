

// import React ,{useState} from 'react';
// import Navbar from '../../Components/navbar/Navbar';
// import Sidebar from '../../Components/sidebar/Sidebar';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Box} from "@mui/material";


// import'./daily.scss';

// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,ResponsiveContainer} from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//   {
//     name: ' A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: ' B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: ' C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: ' D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: ' E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: ' F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: ' G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// const Daily = ({title}) => {
//   const [startDate, setStartDate] = useState(new Date("2023/03/21"));
//   const [endDate, setEndDate] = useState(new Date("2023/12/10"));
//   return (
//     <div className='home'>
    
//     <Sidebar/>
//     <div className="homeContainer">
//     <Navbar/>
//     <div className="chart">
//     <div className="title">{title}</div>
//       <Box className="box" display="flex" justifyContent="space-around">
//         <Box display="flex" justifyContent="center" >
//         <span>StartDate: </span>
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             selectsStart
//             startDate={startDate}
//             endDate={endDate}
//           />
//         </Box>
   
//         <Box display="flex" justifyContent="center">
//         <span>EndDate: </span>
//           <DatePicker
//             selected={endDate}
//             onChange={(date) => setEndDate(date)}
//             selectsEnd
//             startDate={startDate}
//             endDate={endDate}
//             minDate={startDate}
//           />
//         </Box>
//       </Box>

//     <ResponsiveContainer width="100%"  aspect={3/1}>
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//         ))}
//       </Bar>
//     </BarChart>
//     </ResponsiveContainer>
//     </div>
//     </div>
    
//     </div>
//   )
// }

// export default Daily