import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

function Navbar() {
  return (
    <div className="sticky top-0 h-18 shadow-lg">
      <div className='relative'>
      <div className=''>
        <h1>Navbar</h1>
      </div>
      <div className="">
        <DarkmodeSwitch />
      </div>
      </div>
    </div>
  )
}

export default Navbar
