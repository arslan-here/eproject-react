import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const lineData = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 278, pv: 3908, amt: 2000 },
  { name: 'May', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 239, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 349, pv: 4300, amt: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Home() {
  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">1234</p>
            <p className="text-gray-500">This is a description</p>
          </div>
          <div className="flex items-center justify-center bg-green-100 rounded-full w-16 h-16">
            <svg
              className="w-10 h-10 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold">Total Exhibitors</h3>
            <p className="text-2xl font-bold">567</p>
            <p className="text-gray-500">This is a description</p>
          </div>
          <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16">
            <svg
              className="w-10 h-10 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 5h16v14H4V5zm4 4h8v2H8V9zm0 4h8v2H8v-2z"/>
            </svg>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1 flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold">Other Metric</h3>
            <p className="text-2xl font-bold">89</p>
            <p className="text-gray-500">This is a description</p>
          </div>
          <div className="flex items-center justify-center bg-yellow-100 rounded-full w-16 h-16">
            <svg
              className="w-10 h-10 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 0 0 0 12A6 6 0 0 0 12 6zm-1 9h2v2h-2v-2zm0-8h2v6h-2V7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Pie Chart</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Line Chart</h3>
          <LineChart
            width={500}
            height={300}
            data={lineData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default Home;
