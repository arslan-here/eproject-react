import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Event() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    theme: '',
    booth: '',
  });
  const [events, setEvents] = useState([
    { id: 1, title: 'Annual Conference', date: '2024-08-01', location: 'New York', description: 'A conference for industry professionals to network and learn.', theme: 'Business', booth: 'A-1' },
    { id: 2, title: 'Tech Summit', date: '2024-09-15', location: 'San Francisco', description: 'A summit bringing together tech leaders and innovators.', theme: 'Technology', booth: 'B-2' },
    { id: 3, title: 'Marketing Workshop', date: '2024-10-10', location: 'Chicago', description: 'A workshop focused on modern marketing strategies.', theme: 'Marketing', booth: 'C-3' },
    { id: 4, title: 'Product Launch', date: '2024-11-22', location: 'Los Angeles', description: 'The launch event for our latest product release.', theme: 'Product', booth: 'D-4' },
    { id: 5, title: 'Web Development Bootcamp', date: '2024-12-05', location: 'Austin', description: 'An intensive bootcamp on web development skills.', theme: 'Education', booth: 'E-5' },
  ]);
  const [deleteEventId, setDeleteEventId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
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
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {events.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.title}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.location}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.description}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.theme}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{event.booth}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    <FaTrashAlt
                      onClick={() => {
                        setDeleteEventId(event.id);
                        setIsDeleteModalOpen(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl p-6 mx-4 my-10">
            <h2 className="text-xl font-semibold mb-4">Create New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Title</label>
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
                <div className="w-1/2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Date</label>
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
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Location</label>
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
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Description</label>
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
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Theme</label>
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
                <div className="w-1/2">
                  <label htmlFor="booth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Booth Number</label>
                  <input
                    type="number"
                    id="booth"
                    name="booth"
                    value={formData.booth}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                    required
                  />
                </div>
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

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 mx-4 my-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this event?</p>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleDelete(deleteEventId)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Event;
