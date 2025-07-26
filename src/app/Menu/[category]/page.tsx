import { pizzas } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
    return (
        <div className='flex flex-wrap text-red-500'>
            {pizzas.map(item => (
                <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group' href={`/products/${item.id}`} key={item.id}>
                    {item.img &&
                        <div className='relative h-[80%]'>

                            <Image src={item.img} fill alt='' className='object-contain' />
                        </div>

                    }
                    <div className='flex items-center justify-between font-bold group'>
                        <h1 className='text-xl p-2'>{item.title}</h1>
                        <h2 className='group-hover:hidden'>$ {item.price}</h2>
                        <button className='hidden group-hover:block bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryPage