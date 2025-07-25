import React from 'react'
import { menu } from '../components/data'
import Link from 'next/link'
export const metadata = {
    title: 'Menu',
    description: 'Menu',
}
const MenuPage = () => {
    return (
        <div className='p-4 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center  '>

            {menu.map(category => (
                <Link href={`/Menu/${category.slug}`} key={category.id} className="w-full h-1/3 bg-cover p-8 md:h-1/2" style={{ backgroundImage: `url(${category.img})` }}>
                    <div className={`text-${category.color} w-1/2`}>
                        <h1 className='font-bold text-3xl'>{category.title}</h1>
                        <p className='text-sm my-8'>{category.desc}</p>
                        <button className='hidden md:block bg-red-500 py-2 px-4 rounded-md'>Explore</button>
                    </div>
                </Link>
            ))
            }
        </div >
    )
}

export default MenuPage