import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

function Navbar() {
  return (
    <div className="h-18 sticky top-0 shadow-lg">
      <div className="grid grid-cols-[1fr_100px] py-3 mx-auto">
        <div className='ml-20'>
          <h1 className="text-sm font-bold md:text-lg lg:text-2xl">
            Where in the world?
          </h1>
        </div>
        <div className="mr-[300px]">
          <DarkmodeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navbar
