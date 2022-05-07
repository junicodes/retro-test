

import React from 'react'
import { FaChartArea } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import style from "./Style.module.scss";


const Card = ({header, amount, fileUrl, active}) => {
  return (
    <div className={`w-1/2 drop-shadow-lg rounded-lg p-4 pt-6 ${active ? 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800' : 'bg-white'} `}>
        <p className={`text-sm pl-2 flex items-center ${active ? 'text-white' :  'text-gray-700'} `}>
            {header}
        </p>
        <div className='flex justify-between items-center space-x-4'>
            <p className={`text-3xl -mt-6 flex items-center font-bold ${active ? 'text-white' :  'text-gray-700'}`}>
                <BsCurrencyDollar /> {amount}
            </p>
           <div className='w-24 h-24 mt-5'>
             <img src={fileUrl} alt="Static Chart"/>
           </div>
        </div>
    </div>
  )
}

export default Card