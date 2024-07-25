import React, { useState } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: 'user@example.com', // Set a default email value for demonstration
    contact: '',
    role: 'Admin'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-5 text-left">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 cursor-not-allowed"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="contact">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="role">
            Role
          </label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Admin">Admin</option>
            <option value="Exhibitor">Exhibitor</option>
            <option value="Attendee">Attendee</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
