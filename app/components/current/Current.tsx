import React from 'react'
import Image from 'next/image'

import { getCurrentDate } from '../../utils/currendate'

interface currentProps {
    data: any
}

const Current = ({ data }:currentProps ) => {
    const currentData = getCurrentDate()
    const weatherIcon = data.current.condition.icon
    // 1:25:44
  return (
    <div className="flex flex-col mb-8 md:mv-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
            <div className="">
                <h1 className="text-3xl text-white">Today</h1>
                <p className="text-white">{currentData}</p>
                {weatherIcon && (
                    <div className="">
                        <img src={weatherIcon} alt='' width={100} height={100}/>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Current