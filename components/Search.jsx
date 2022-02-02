import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

function SearchBar() {
  return (
    <div
      className="flex w-[400px] space-x-2 border-2 border-transparent 
     p-2 shadow-md"
    >
      <SearchIcon className="mr-1 h-6 w-6 text-gray-400" />
      <input
        type="text"
        name="Search"
        className="outline-none w-full"
        placeholder="Search for a country..."
      />
    </div>
  )
}

export default SearchBar
