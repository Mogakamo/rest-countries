import React from 'react'
import {MoonIcon} from '@heroicons/react/outline'

function DarkmodeSwitch() {
  return (
    <div className='border-2 mx-auto float-right border-gray-200 w-36 space-x-3 flex items-center rounded-full h-8 px-2'>
      <MoonIcon className='h-8 w-8 hover:bg-gray-400 rounded-full transition transform duration-150 ease-out text-yellow-100' />
      <h1 className='text-xs tracking-tighter md:tracking-wide lg:tracking-widest'>Dark Mode</h1>
    </div>
  )
}

export default DarkmodeSwitch
