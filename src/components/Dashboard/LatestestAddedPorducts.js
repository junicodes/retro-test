
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        photo: 'https://randomuser.me/api/portraits/men/61.jpg',
        title: 'PSG Stadium 20/21',
        subTitle: '3 Variants',
        uniqueNumber: '86008455',
        category: 'Jersey',
        date: '12.11.2020',
        status: 'Published'
    },
    {
        photo: 'https://random.imagecdn.app/500/150',
        title: 'Los Angeles Lakers City',
        subTitle: '5 Variants',
        uniqueNumber: '86984885',
        category: 'Jersey',
        date: '22.11.2021',
        status: 'Pending'
    },
    {
        photo: 'https://random.imagecdn.app/500/150',
        title: 'Mami Heart Courtside',
        subTitle: '4 Variants',
        uniqueNumber: '86980378885',
        category: 'Jersey',
        date: '02.11.2021',
        status: 'Published'
    },
    {
        photo: 'https://random.imagecdn.app/500/150',
        title: 'Liverpool FC 20/21 Stadium',
        subTitle: '7 Variants',
        uniqueNumber: '869738885',
        category: 'Outwear',
        date: '02.11.2021',
        status: 'Published'
    }
]

const LatestestAddedPorducts = () => {
  return (
    <div className='bg-white drop-shadow-lg h-94 w-2/3 p-4 rounded-lg'>
        <p className={`text-sm pl-2 flex items-center`}>
            Latest Added Products
        </p>
        <div className='w-full h-full px-4'>
           {
               data.map(item => (
                <div key={item.uniqueNumber} className='flex flex-row py-4 items-center justify-between w-full'>
                    <div className="rounded-md flex justify-start space-x-2 items-center w-2/6 truncate h-12">
                        <img className="rounded-md border border-gray-100 shadow-sm w-12 h-12" src={item.photo} alt="user image" />
                        <div>
                            <h5 className="text-black text-xs font-semibold truncate text-left">{item.title}</h5>
                            <p className="text-gray-500 text-xs text-left">{item.subTitle}</p>
                        </div>
                    </div>
                    <div className='w-1/6'>
                        <h5 className="text-gray-500 text-xs font-semibold truncate text-left">
                            SKU:&nbsp;
                            <span className='text-black'>{item.uniqueNumber}</span>
                        </h5>
                    </div>
                    <div className='w-1/6'>
                        <h5 className="text-gray-500 text-xs font-semibold truncate text-left">
                            {item.category}
                        </h5>
                    </div>
                    <div className='w-1/6'>
                        <h5 className="text-gray-500 text-xs font-semibold truncate text-left">
                            {item.date}
                        </h5>
                    </div>
                    <div className='w-1/6'>
                        <h5 className={`text-gray-500 text-xs w-20 text-center ${item.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-800'} py-1 rounded-full`}>
                            {item.status}
                        </h5>
                    </div>
                </div>
               ))
           }
        </div>
    </div>
  )
}

export default LatestestAddedPorducts