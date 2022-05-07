
import React from 'react'
import Card from '../Sub-Components/Card'

const Analytics = () => {
  return (
    <div className='flex w-full space-x-2 h-36 mt-4'>
        <Card 
            header="Daily Income"
            amount="500"
            fileUrl={'./chart-removebg-preview.png'}
            active
        />
        <Card 
            header="Daily Income"
            amount="500"
            fileUrl={'https://image-charts.com/chart?chbh=20&chbr=10&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdlp=r&chs=500x250&cht=bvg&chxl=0%3A%7C%7C&chxs=1N%2AcUSD0sz%2A%2C000000%2C14'}
        />
        <Card 
            header="Daily Income"
            amount="500"
            fileUrl={'https://image-charts.com/chart?chco=224499&chd=s%3AATSTaVd21981uocA&chm=B%2C76A4FB%2C0%2C0%2C0&chs=500x250&cht=lc'}
        />
        <Card 
            header="Daily Income"
            amount="500"
            fileUrl={'https://image-charts.com/chart?chbh=20&chbr=10&chco=CFECF7%2C27c9c2&chd=a%3A10000%2C50000%2C60000%2C80000%2C40000%7C50000%2C60000%2C100000%2C40000%2C20000&chdlp=r&chs=500x250&cht=bvg&chxl=0%3A%7C%7C&chxs=1N%2AcUSD0sz%2A%2C000000%2C14'}
        />
    </div>
  )
}

export default Analytics