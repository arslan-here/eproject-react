import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    event: '',
    speaker: '',
    topic: '',
    location: '',
    datetime: '',
  });
  const [schedules, setSchedules] = useState([
    { id: 1, event: 'Event 1', speaker: 'John Doe', topic: 'Topic A', location: 'Room 101', datetime: '2024-07-23T10:00' },
    { id: 2, event: 'Event 2', speaker: 'Jane Smith', topic: 'Topic B', location: 'Room 202', datetime: '2024-07-24T14:00' },
    // Add more schedules as needed
  ]);
  const [deleteScheduleId, setDeleteScheduleId] = useState(null);

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
    setSchedules(schedules.filter(schedule => schedule.id !== id));
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
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Speaker</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{schedule.event}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{schedule.speaker}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{schedule.topic}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{schedule.location}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">{schedule.datetime.replace('T', ' ')}</td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 text-center">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
                    <FaTrashAlt
                      onClick={() => {
                        setDeleteScheduleId(schedule.id);
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
            <h2 className="text-xl font-semibold mb-4">Create New Schedule</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="event" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Event</label>
                <select
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                >
                  <option value="">Select event</option>
                  <option value="event1">Event 1</option>
                  <option value="event2">Event 2</option>
                  <option value="event3">Event 3</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="speaker" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Speaker</label>
                <input
                  type="text"
                  id="speaker"
                  name="speaker"
                  value={formData.speaker}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Topic</label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600"
                  required
                />
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
                <label htmlFor="datetime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left">Date & Time</label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={formData.datetime}
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

      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-70">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 mx-4 my-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this schedule?</p>
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
                onClick={() => handleDelete(deleteScheduleId)}
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

export default Schedule;
