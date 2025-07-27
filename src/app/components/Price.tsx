"use client"

import React, { useEffect, useState } from 'react'

type Option = {
    title: string;
    additionalPrice: number;
};

type props = {

    price: number,
    id: number,
    options: Option[],

}

function Price({ price,
    id,
    options }: props) {


    const [total, setTotal] = useState(price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
    }, [options, price, quantity, selected])
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>$ {total.toFixed(2)}</h2>
            <div className='flex gap-4'>
                {options.map((option, index) => (
                    <button key={option.title} className='p-2 ring-1 ring-red-500 rounded-md ' style={{ background: selected === index ? 'red' : 'white', color: selected === index ? 'white' : 'red' }} onClick={() => setSelected(index)}>{option.title}</button>
                ))}
            </div>
            <div className=' flex justify-between items-center gap-2'>
                <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                    <span>Quantity</span>
                    <div className='flex gap-2 items-center'>
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                    </div>
                </div>
                <button className='p-2 ring-1 w-1/2 ring-red-500 rounded-md'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Price