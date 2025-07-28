import React from 'react'

function Cart() {
    return (
        <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row '>
            <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full  lg:w-2/3'>
                <div className="flex items-center justify-between mb-4 ">
                    {/* <Image src={ } alt='' width={100} height={100} /> */}
                    <div className="">
                        <h1 className='font-bold text-xl'></h1>
                        <span className='font-bold'></span>
                    </div>
                    <h2>$</h2>
                    <span className='font-bold cursor-pointer'>X</span>
                </div>
            </div>
            <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full  lg:w-1/3'>
                <div className=" flex justify-between">
                    <span className="">Subtotal (Items)</span>
                    <span className="">$</span>
                </div>
                <div className=" flex justify-between">
                    <span className="">Service</span>
                    <span className="">$</span>
                </div>
                <div className=" flex justify-between">
                    <span className="">Delivery</span>
                    <span className="">$</span>
                </div>
                <hr className='' />
                <div className=" flex justify-between">
                    <span className="">Total</span>
                    <span className="font-bold">$</span>
                </div>
                <button className=' bg-red-500 p-3 rounded-md text-white w-1/2 md:w-1/2'>Check out</button>
            </div>
        </div>
    )
}

export default Cart