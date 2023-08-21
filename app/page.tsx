"use client"
import React, { useState, KeyboardEvent } from 'react'
import Image from 'next/image'

import logo from './assets/logo.png'
import Input from './components/input/Input'

const Home = () => {
  const [data,setData] = useState({})
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const url = `http://api.weatherapi.com/v1/forecast.json?key=b96a9c2aa05a4d408af122152232108&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const res = await fetch(url)
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json()
        setData(data)
        setLocation("")
        setError("")
      } catch (error) {
        setError("City not found.")
        setData({})
// 1:04:39
      }
    }
  } 

  return (
    <div className="bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <div className="mb-8 md:mb-0 order-1 ">
            <Image src={logo} className="w-8 md:w-14" alt="" />
          </div>
          {data.current ? (
            <div className="">
              {data.current.temp_f}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Home