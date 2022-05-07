
import React from 'react'
import { FaBars } from 'react-icons/fa'
import Search from '../Sub-Components/Search'
import { useAppContext, useDispatchAppContext } from "../../context_api/AppContext";

const TopNav = () => {

   //Use Context
   const appContext = useAppContext();
   const dispatchAppContext = useDispatchAppContext();
   const { sideBarToggle } = appContext;

  const toggleModal = () =>{
    dispatchAppContext({
        type: 'SIDEBAR_TOGGLE',
        payload: !sideBarToggle
    })
  }

  return (
    <div className='h-auto md:h-12 w-full flex flex-col md:flex-row justify-between items-center'>
        <div className='order-last md:order-first'>
          <Search />
        </div>
        <div className="rounded-md my-5 md:my-0 flex justify-between md:justify-end space-x-2 items-center px-5 h-12 order-first md:order-last w-full">
            <FaBars onClick={toggleModal} className='block md:hidden' />
            <div className='flex'>
                <div>
                    <h5 className="text-gray-500 text-xs font-semibold truncate text-right">admin@gmail.com</h5>
                    <p className="text-gray-500 text-xs text-left md:text-right">Admin</p>
                </div>
                <img className="rounded-full border border-gray-100 shadow-sm w-8 h-8" src="https://randomuser.me/api/portraits/men/61.jpg" alt="user image" />
            </div>
        </div>
    </div>
  )
}

export default TopNav