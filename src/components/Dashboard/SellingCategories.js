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
    <div className='border h-94 w-1/3 rounded-lg p-4'>
        <p className={`text-sm pl-2 flex items-center`}>
            Top Selling Categories
        </p>
        <SimpleRadialChart data={data} />
    </div>
  )
}

export default SellingCategories