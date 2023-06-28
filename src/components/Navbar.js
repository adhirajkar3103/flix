import React from 'react'
import {RiMovie2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
const Navbar = () => {
  const {user,logOut} = UserAuth();
  const handleLogout = async()=>{
    try {
      await logOut();
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
    <Link to='/'>
    <h1 className='text-red-600 text-4xl cursor-pointer font-bold'><RiMovie2Line className='inline' />FLIX</h1>
    </Link>
      {
        user?.email?(
          <div>
        <Link to='/account'>
        <button className='text-white pr-4'>Account</button>
        </Link>
        <button onClick={handleLogout} className='bg-red-600 text-white px-6 py-2 cursor-pointer rounded'>Log out</button>
        </div>
        ):(
          <div>
        <Link to='/login'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to='/signup'>
        <button className='bg-red-600 text-white px-6 py-2 cursor-pointer rounded'>Sign Up</button>
        </Link>
        </div>
        )
      }
    </div>
  ) 
}

export default Navbar