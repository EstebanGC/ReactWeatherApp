import React from 'react'

function TopButtons() {

    const cities = [
        {
            id:1,
            title: 'Berlin'

        },
        {
            id:2,
            title: 'New York City'
        },
        {
            id: 3,
            title: 'Medellin'
        },
        {
            id:4,
            title:'Nairobi'
        },
        {
            id:5,
            title: 'Bs. Aires'
        },
    ];

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button 
            key={city.id} 
            className='text-white text-lg font-medium'
            >{city.title}
            </button>
        ))}
    </div>
  );
}

export default TopButtons;