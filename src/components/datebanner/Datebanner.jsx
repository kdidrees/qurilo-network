import React from 'react'

const Datebanner = ({date}) => {
    const [month, day, year] = date.split(',');
  return (
    <div className='bg-creme absolute top-0 left-0 h-22 w-20 px-3 py-2 text-center text-darkBlue'>
        <p className='capitalize text-lg font-medium'>{month}</p>
        <p className='font-semibold text-2xl'>{day}</p>
        <p className='text-lg font-medium'>{year}</p>
      
    </div>
  )
}

export default Datebanner