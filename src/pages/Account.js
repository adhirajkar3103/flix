import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
      <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'></div>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account