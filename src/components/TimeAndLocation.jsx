import React from 'react'

function TimeAndLocation() {
  return (
    <div>
    <div className='flex items-center justify-center my'>
        <p className='text-white text-xl font-extralight'>
            Sunday, 23 July 2022 | Local time: 18:04 PM
        </p>
    </div>

    <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
            Berlin, DE
        </p>
    </div>
    </div>
  )
}

export default TimeAndLocation