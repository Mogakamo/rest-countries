import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

function Navbar() {
  return (
    <div className="h-18 sticky top-0 shadow-lg">
      <div className="grid grid-cols-2 py-5 ">
        <div className="px-10">
          <h1 className="font-bold text-xs md:text-lg">Where in the world?</h1>
        </div>
        <div className="hidden md:inline-grid mr-0">
          <DarkmodeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navbar
