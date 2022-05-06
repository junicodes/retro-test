
import React from 'react'
import Analytics from './Analytics'
import LatestestAddedPorducts from './LatestestAddedPorducts'
import SaleOverview from './SaleOverview'
import SellingCategories from './SellingCategories'
import TopNav from './TopNav'


const HomeView = () => {
  return (
    <div className={`h-full p-6 rounded-lg`}>
        <TopNav />
        <SaleOverview />
        <Analytics />
        <div className='flex justify-between space-x-4 h-96 my-4'>
            <SellingCategories />
            <LatestestAddedPorducts />
        </div>
    </div>
  )
}

export default HomeView