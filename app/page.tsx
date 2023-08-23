"use client"
import React, { useState, KeyboardEvent } from 'react'
import Image from 'next/image'

import logo from './assets/logo.png'
import Input from './components/input/Input'
import Current from './components/current/Current'
import WeakForecast from './components/week-forecast/WeakForecast'
import Details from './components/details/Details'

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
      }
    }
  } 

  let content;
  if (Object.keys(data).length === 0 && error === '') {
    content = (
      <div className="">
        <h2>Welcome the the weather forecast.</h2>
      </div>
    )
  } else if (error !== '') {
    content = (
      <div className="">
        <p>City not found</p>
      </div>
    )
  } else {
    content = (
      <>
        <div className="">
          <Current data={data} />
          <WeakForecast />
        </div>
        <div className="">
          <Details />
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <div className="mb-8 md:mb-0 order-1 ">
            <Image src={logo} className="w-8 md:w-14" alt="" />
          </div>
        </div>
        {content}
      </div>
    </div>
  )
}

export default Home