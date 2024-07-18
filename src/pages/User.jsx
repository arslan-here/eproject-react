import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL
function User() {

    const navigate = useNavigate();
    const [data , setData] = useState([]);


    const fetchUser = () =>{
        const token = localStorage.getItem('token');       
        if (token) {
            axios.get(`${API_URL}user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                console.log(response);
                 setData(response.data.users) 
            })
            .catch(error => {
                alert("Fetching Error")
            });
        } else {
            navigate('/login')
        }
    }

    useEffect(()=>{
        fetchUser();
    },[])

  return (
    <>
    
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SNO
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Registered at
                </th>
            </tr>
        </thead>
        <tbody>

        {data.map((item,index)=>(
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {index+1}
                </th>
                <td class="px-6 py-4">
                    {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.email}
                </td>
                <td class="px-6 py-4">
                   {item.createdat}
                </td>
            </tr>
            ))}


           
        </tbody>
    </table>
</div>

    
    </>
  )
}

export default User