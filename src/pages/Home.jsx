import React from 'react';

function Home() {
  return (
    <div className="flex space-x-4 p-4">
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
  );
}

export default Home;