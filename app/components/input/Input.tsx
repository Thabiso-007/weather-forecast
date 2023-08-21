import React, { Dispatch, KeyboardEvent, SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs'

interface InputProps {
    handleSearch: (event: KeyboardEvent<HTMLInputElement>) => void
    setLocation: Dispatch<SetStateAction<string>>
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className="flex items-center border-b-2 md:w-2/4 order-2 md:order-1">
        <input 
            type="text"
            className="w-full bg-transparent  outline-none placeholder-white text-white"
            placeholder='Search City'
            onKeyDown={handleSearch}
            onChange={(e) => setLocation(e.target.value)}
        />
        <div className="ml-[25px] text-white cursor-pointer">
            <BsSearch />
        </div>
    </form>
  )
}

export default Input