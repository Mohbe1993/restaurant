'use client'

import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },

    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },

];
function Slider() {
    const [curSlid, setCurSlid] = useState(0)
    useEffect(() => {
        const interval = setInterval(
            () => {
                setCurSlid(prev => (prev === itemData.length - 1 ? 0 : prev + 1))
            }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  lg:flex-row bg-fuchsia-50 px-3.5'>
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
                <h1 className='text-center text-3xl md:text-5xl'>{itemData[curSlid].title}</h1>
                <Button sx={{ backgroundColor: '#ef4444', '&:hover': { backgroundColor: '#dc2626' } }} variant="contained">Order now</Button>
            </div>
            <div className='w-full flex-1 relative m-auto '>

                <img
                    className='object-center rounded-2xl md:mb-3'
                    src={`${itemData[curSlid].img}`}
                    alt={itemData[curSlid].title}
                    loading="lazy"
                />

            </div>
        </div>
    )
}

export default Slider