import React from 'react'
import DarkmodeSwitch from './DarkmodeSwitch'

function Navbar() {
  return (
    <div className="h-18 sticky top-0 shadow-lg">
      <div className="flex flex-row space-y-4">
        <div className="flex items-start">
          <h1 className="text-xs flex-1 flex font-bold md:text-2xl">Where in the world?</h1>

          <DarkmodeSwitch className="align-middle" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
