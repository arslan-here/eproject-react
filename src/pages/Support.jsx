import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'Yup'


const API_URL = import.meta.env.VITE_API_URL
function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    <div className="max-w-lg mx-auto mt-10 bg-white p-5 rounded shadow">
      <h2 className="text-2xl font-bold mb-5 text-left">How can we help you?</h2>
      <p className="mb-4 text-gray-700 text-left">
        Please fill out the form below with your inquiry, and we will get back to you as soon as possible.
      </p>
      <Formik validationSchema={Yup.object({
        name:Yup.string().required(),
        email:Yup.string().email().required(),
        subject:Yup.string().required(),
        message:Yup.string().required(),
      })}
      initialValues={{
        name:'',email:'',subject:'',message:''
      }}

      onSubmit={async(values,{ resetForm })=>{
        const token = localStorage.getItem('token'); 
        await axios.post(`${API_URL}support/create`,values,{
          headers: {
            Authorization: `Bearer ${token}`
        }
        })
        .then((response)=>{
            toast.success("Submitted successfully")
            resetForm()
        
        })
        .catch((error)=>{
          toast.error(error.response.data.message)
        })
      }}
      >
      <Form >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="name">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" className='text-red-500' />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
            Email
          </label>
          <Field
            type="email"
            name="email"
            id="email"

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" className='text-red-500' />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="subject">
            Subject
          </label>
          <Field
            type="text"
            name="subject"
            id="subject"

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the subject"
          />
          <ErrorMessage name="subject" className='text-red-500' />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="message">
            Message
          </label>
          <Field as="textarea"
            name="message"
            id="message"

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your message"
            rows="5"
          ></Field>
          <ErrorMessage name="message" className='text-red-500' />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </Form>
      </Formik>
    </div>
  );
}

export default Support;
