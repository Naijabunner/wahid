import Image from 'next/image'
import React from 'react'
import images from '../../../public/hero/centermain.png'
import { Button } from '@/components/ui/Button'
const LargeCenterImage = () => {
    return (
        <div className=" flex-1 w-full relative text-black">
            <Image
                src={images}
                alt=''
                className=' w-full h-full '
                unoptimized
            />
            <div className=" container absolute top-0 w-[60%] p-2 md:p-5 sm:w-[50%] right-0 h-full flex flex-col justify-center items-center ">
                <div className="wrapper space-y-2 sm:space-y-3">
                    <p className=' text-sm sm:text-lg'>WELCOME TO OUR</p>
                    <p className='text-2xl sm:text-4xl font-bold'>FURNITURE</p>
                    <p className='text-[10px] sm:text-sm max-w-[295px] '>
                        There are many variations of
                        passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,
                        by injected humour,
                        or randomised words which don't look even slightly believable
                    </p>
                    <Button className='py-1'>
                        Buy now
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default LargeCenterImage