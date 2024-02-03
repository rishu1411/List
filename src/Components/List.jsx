'use client'
import React, { useState, useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './SkeletonCard';

function List() {

    const [dataLis, setDataLis] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [show,setShow] = useState(false)
    
    useEffect(() => {
        const url = 'https://602e7c2c4410730017c50b9d.mockapi.io/users'  
        async function  fetchUrl() {
            try {
                const response = await fetch(url)
                const data = await (response.json())
                localStorage.setItem('userList', JSON.stringify(data))
                setDataLis(data)
                setIsLoading(false)
            }
            catch (err) {
                console.error(err)
            }
        }
        fetchUrl()
        setDataLis(JSON.parse(localStorage.getItem('userList')))
    },[])

    console.log(dataLis)

  return (
      <div>
            <div className="text-3xl font-extrabold text-center my-2">
              <span className="txt-bg">Welcome to Users List</span>
          </div>
          <div className=' m-4 border '>
              
          {
                  dataLis && dataLis.map((item,key) => {
                      let isTrue = item.avatar.includes('cdn')
                      
                      return (
                          isLoading? <SkeletonCard /> :
                          <div className='border-b flex flex-col gap-y-4 p-2 py-4 md:p-4 odd:backdrop-blur-md gap-x-6 items-center md:items-start md:flex-row' key={key}>
                              {
                                  isTrue === false ? <img src={item.avatar} alt="profile pic" className='rounded-full h-20 w-20' /> : <div className='h-20 w-20 rounded-full bg-gray-600 flex items-center justify-center'><PersonIcon className=' text-white'/></div>
                         }
                                  <div className='flex flex-col md:flex-row w-auto gap-x-6 gap-y-3  '>
                                      <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                                          <h4 className='text-2xl text-white font-semibold'>{item.profile.firstName} {item.profile.lastName}</h4>
                                          <p className='text-sm mb-2 text-gray-400'>{item.jobTitle}</p>
                                          <p className='text-sky-300 text-sm'>{item.profile.email}</p>
                                          {
                                              !show&& <button className='text-white w-auto py-1 px-2 rounded-md mt-2 bg-violet-400' onClick={()=>setShow(true)}>Show More</button>
                                          }
                                      </div>

                                    { show&& <div className=' flex gap-y-3 gap-x-3 flex-col justify-center items-center md:justify-start md:items-start'>
                                          <p className='text-white'>UserName: {item.profile.username}</p>
                                          <p className='w-auto text-center text-blue-300'>Bio: {item.Bio}</p>
                                          {
                                              show&& <button className='text-white w-auto py-1 px-2 rounded-md bg-violet-400' onClick={()=>setShow(false)}>Show Less</button>
                                          }
                                          
                                      </div>}
                                      
                         </div>
                      </div>
                  )
              })
              }
              </div>
          
    </div>
  )
}

export default List