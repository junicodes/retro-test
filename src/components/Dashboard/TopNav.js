
import React from 'react'
import Search from '../Sub-Components/Search'

const TopNav = () => {
  return (
    <div className='h-12 w-full flex justify-between items-center'>
        <Search />
        <div className="rounded-md flex justify-center space-x-2 items-center px-5 h-12">
            <div>
                <h5 className="text-gray-500 text-xs font-semibold truncate text-right">admin@gmail.com</h5>
                <p className="text-gray-500 text-xs text-right">Admin</p>
            </div>
            <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/men/61.jpg" alt="user image" />
        </div>
    </div>
  )
}

export default TopNav