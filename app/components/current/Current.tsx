import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'

import { getCurrentDate } from '../../utils/currendate'

interface currentProps {
    data: {
        current: {
            condition: {
                icon: string;
                text: string;
            };
            temp_f: number
        };
        location: {
            name: string;
            region: string;
        }
    }
}

const Current = ({ data }:currentProps ) => {
    const currentData = getCurrentDate()
    const weatherIcon = data.current.condition.icon
    
  return (
    <div className="flex flex-col mb-8 md:mv-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
            <div>
                <h1 className="text-3xl text-white">Today</h1>
                <p className="text-white">{currentData}</p>
            </div>
        </div>
        <div>
            <div>
                {weatherIcon && (
                    <div>
                        <img 
                            src={weatherIcon} 
                            alt={data.current.condition.text}
                            className="w-[50px] object-cover" 
                            width={100} 
                            height={100}
                        />
                    </div>
                )}
            </div>
        </div>
        <div>
            <p className="text-5xl text-white">{data.current.temp_f.toFixed()}<span>°</span></p>
            <span className="text-white">{data.current.condition.text}</span>
        </div>
        <div>
            <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
                <IoLocationOutline />
                <span>{data.location.name}, {data.location.region}</span>
            </div>
        </div>
    </div>
  )
}

export default Current