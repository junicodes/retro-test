import React from 'react'
import SimpleRadialChart from '../Packages/Charts/ReChart/SimpleRadialChart';
const data = [
    {
      subject: 'Outwear',
      A: 120,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Shoes',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Accessories',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'T-shirts',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Jeans',
      A: 85,
      B: 90,
      fullMark: 150,
    }
  ];

const SellingCategories = () => {
  return (
    <div className='h-94 w-full my-2 lg:my-0 lg:w-1/3 rounded-lg p-4 bg-white drop-shadow-md'>
        <p className={`text-sm md:pl-2 text-center md:text-left`}>
            Top Selling Categories
        </p>
        <SimpleRadialChart data={data} />
    </div>
  )
}

export default SellingCategories