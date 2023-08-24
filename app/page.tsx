"use client"
import React, { useState, KeyboardEvent } from 'react'
import Image from 'next/image'

import logo from './assets/logo.png'
import Input from './components/input/Input'
import Current from './components/current/Current'
import WeakForecast from './components/week-forecast/WeakForecast'
import Details from './components/details/Details'
import nextConfig from '../next.config'

const Home = () => {
  const [data,setData] = useState<any>({})
  const [location, setLocation] = useState<string>("")
  const [error, setError] = useState<string>("")
  
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${nextConfig.env}&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      try {
        const res = await fetch(url, {
          method: "GET", // POST, PUT, DELETE, etc.
          headers: {
          // the content type header value is usually auto-set
          // depending on the request body
          "Content-Type": "application/json",
          }
        })
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
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl">Welcome the the weather forecast.</h2>
        <p>Enter a city name to get the weather forecast.</p>
      </div>
    )
  } else if (error !== '') {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl">City not found</p>
      </div>
    )
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <WeakForecast data={data} />
        </div>
        <div className="">
          <Details data={data} />
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-red-700 to-red-500 h-fit">
      <div className="bg-white/25 w-full flex flex-col h-full">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <div className="mb-8 md:mb-0 order-1 align-center justify-center">
            <Image src={logo} className="w-8 md:w-14" alt="" />
            <h2 className="text-2xl text-white">Weather forecast</h2>
          </div>
        </div>
        {content}
      </div>
    </div>
  )
}

export default Home