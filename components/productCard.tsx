import Image from 'next/image'
import React from 'react'
import image from '../public/hero/chair.png'
import { Button } from './ui/Button'
import { FaStar } from 'react-icons/fa'
const ProductCard = () => {
    return (
        <div className="card border-2 border-textGold p-3 md:p-5 space-y-3 ">
            <Image
                src={image}
                alt='name'
                className=''
            />
            <div className="details space-y-3">
                <div className="title_ratings flex-wrap flex justify-between items-center">
                    <p className='text-xs md:text-sm text-black'>Funiture</p>
                    <p className=' text-[20px] flex gap-2 self-center'>
                        <FaStar className=' text-[10px] sm:text-xs md:text-sm text-textGold' />
                        <FaStar className=' text-[10px] sm:text-xs md:text-sm text-textGold' />
                        <FaStar className=' text-[10px] sm:text-xs md:text-sm text-textGold' />
                        <FaStar className=' text-[10px] sm:text-xs md:text-sm text-textGold' />
                        <FaStar className=' text-[10px] sm:text-xs md:text-sm text-textGold' />
                    </p>
                </div>
                <div className=" flex justify-between  gap-y-2 items-center max-lg:flex-col-reverse max-lg:justify-center">
                    <Button size={"sm"} className=' px-1 max-lg:w-full border-0 rounded-[4px] py-0  text-base font-normal '>
                        Add to card
                    </Button>
                    <p className=' text-[#CC857E] font-bold text-base lg:text-lg '>
                        $58.55
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard