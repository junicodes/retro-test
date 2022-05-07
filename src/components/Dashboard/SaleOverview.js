import React from 'react'
import Button from '../Sub-Components/ButtonWithIcon'
import { FaPlus, FaDotCircle } from 'react-icons/fa';
import SimpleAreaChart from '../Packages/Charts/ReChart/SimpleAreaChart'
import DropDown from '../Sub-Components/DropDown';

const data = [
  {
    date: 'Jan',
    uv: 300,
    pv: 2400,
    amt: 1700,
  },
  {
    date: 'Feb',
    uv: 700,
    pv: 1398,
    amt: 1210,
  },
  {
    date: 'Mar',
    uv: 1200,
    pv: 9800,
    amt: 2290,
  },
  {
    date: 'Apr',
    uv: 780,
    pv: 3908,
    amt: 1000,
  },
  {
    date: 'May',
    uv: 1490,
    pv: 4800,
    amt: 2181,
  },
  {
    date: 'June',
    uv: 2490,
    pv: 4800,
    amt: 3281,
  },
  {
    date: 'July',
    uv: 490,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Aug',
    uv: 1690,
    pv: 4800,
    amt: 1481,
  },
  {
    date: 'Sept',
    uv: 1090,
    pv: 4800,
    amt: 1281,
  },
  {
    date: 'Oct',
    uv: 1890,
    pv: 4800,
    amt: 1781,
  },
  {
    date: 'Nov',
    uv: 790,
    pv: 4800,
    amt: 1481,
  },
  {
    date: 'Dec',
    uv: 990,
    pv: 500,
    amt: 781,
  }
];

const areaOption = {
  data,
  width: 500,
  height: 400,
  margin: {
    top: 0,
    right: 20,
    left: -22,
    bottom: 40,
  }
}

const filterDropDown = [
    {
        id: 1,
        title: 'Year'
    },
    {
        id: 2,
        title: 'Month'
    },
    {
        id: 3,
        title: 'Days'
    }
];

const SaleOverview = () => {
  return (
    <div className='border h-96 w-full mt-3 rounded-xl bg-white'>
        <div className='w-full h-16 flex flex-row px-4 items-center justify-between'>
          <h4 className='font-bold'>
              Sales Ovieview
          </h4>
          <Button title='Add Offer' 
            icon={<FaPlus />}
            clickHandler={(e) => console.log("button clicked", e)}
          />
        </div>
        <div className='border w-full h-80 relative rounded-b-xl'>
            <div className='flex justify-between items-center px-5 py-1'>
               <p className="text-black font-bold text-xs text-left px-2 py-2">Invoice</p>
               <div className='flex justify-end space-x-2 items-center'>
                  <p className="text-black text-xs pr-2 flex items-center">
                      <FaDotCircle size={8} color="#6694da" />&nbsp;
                      Incomes
                  </p>
                  <p className="text-black text-xs pr-6 flex items-center">
                      <FaDotCircle size={8} color="#d481c4" />&nbsp;
                      Expense
                  </p>
                  <DropDown 
                    onChange={(e) => console.log(e, "select")} 
                    payload={filterDropDown} 
                    variant=""
                  />
               </div>
            </div>
            <SimpleAreaChart areaOption={areaOption}/>
        </div>
    </div>
  )
}

export default SaleOverview