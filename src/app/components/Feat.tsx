import React from 'react'
import { featuredProducts } from './data'

function Feat() {
    return (
        <div className=' w-screen overflow-x-scroll text-red-500 '>
            <div className=' w-max flex '>
                {featuredProducts.map(item => (

                    <div key={item.id} className=' hover:bg-fuchsia-50 transition-all duration-300 w-screen h-[60vh] flex flex-col items-center justify-around p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
                        {item.img && <div className='relative flex-1 w-full hover:rotate-1 transition-all duration-500'>
                            <img src={item.img} alt="" fill="true" className='object-contain ' />
                        </div>
                        }
                        <div className=' flex-1 flex flex-col items-center gap-4'>
                            <h1 className='text-xl font-bold'>{item.title
                            }
                            </h1>
                            <p className='p-4 text-center'>{item.desc}</p>
                            <span className='text-xl font-bold'>${item.price}</span>
                            <button className='bg-red-500 rounded-md text-white p-2 '>Add to cart</button>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Feat