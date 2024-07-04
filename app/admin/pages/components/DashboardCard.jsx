import React from 'react'

const DashboardCard = ({title, number, styles}) => {
  return (
      <div className=''>
          <div className={`w-60 h-24 px-5 py-2 rounded-lg flex flex-col ${styles}`}>
              <p className="text-xl text-white font-bold mb-3">{title}</p>
              <p className="text-lg text-white font-semibold">{ number }</p>
          </div>
    </div>
  )
}

export default DashboardCard
