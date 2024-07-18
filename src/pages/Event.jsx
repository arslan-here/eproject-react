import React, { useState } from 'react';

function Event() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    theme: '',
    booth: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the form data to a server or update local state.
    console.log('Form data submitted:', formData);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="p-6">
        <div className="flex justify-between items-center mb-4">
    {/* <h1 className="text-2xl font-semibold text-center">Event Table</h1> */}
    <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
      Create
    </button>
  </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Theme</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Booth</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Annual Conference</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">2024-08-01</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">New York</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">A conference for industry professionals to network and learn.</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Business</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">A-1</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Tech Summit</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">2024-09-15</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">San Francisco</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">A summit bringing together tech leaders and innovators.</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Technology</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">B-2</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Marketing Workshop</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">2024-10-10</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Chicago</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">A workshop focused on modern marketing strategies.</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Marketing</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">C-3</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Product Launch</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">2024-11-22</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Los Angeles</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">The launch event for our latest product release.</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Product</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">D-4</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Web Development Bootcamp</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">2024-12-05</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Austin</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">An intensive bootcamp on web development skills.</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">Education</td>
              <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">E-5</td>
            </tr>
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Theme</label>
                <input
                  type="text"
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="booth" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Booth</label>
                <input
                  type="text"
                  id="booth"
                  name="booth"
                  value={formData.booth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Event;
