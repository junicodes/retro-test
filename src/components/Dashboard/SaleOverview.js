import React from 'react'
import Button from '../ButtonWithIcon'
import { FaPlus } from 'react-icons/fa';

const SaleOverview = () => {
  return (
    <div className='border h-96 w-full mt-3 rounded-lg bg-white'>
        <div className='border w-full h-14 flex flex-row px-4 items-center justify-between'>
          <h4 className='font-bold'>
              Sales Ovieview
          </h4>
          <Button title='Add Offer' 
            icon={<FaPlus />}
            clickHandler={(e) => console.log("button clicked", e)}
          />
        </div>
        SaleOverview
    </div>
  )
}

export default SaleOverview