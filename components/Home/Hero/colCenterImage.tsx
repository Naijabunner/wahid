import React from 'react'
import images from '../../../public/hero/chair.png'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const ColCenterImage = () => {
    return (
        <div className="bg-foregroundTwo flex-1 relative">
            <Image
                src={images}
                alt=''
                className=' w-full h-full '
                unoptimized
            />
            <div className="w-full h-full flex flex-col justify-between absolute top-0 p-3">
                <div className="top_container flex justify-between items-center">
                    <p className="newTag bg-textGold text-[12px] text-white px-3 py-[1px] rounded-sm w-fit">
                        NEW
                    </p>
                    <p className=' text-xl md:text-3xl font-medium text-black'>
                        $500
                    </p>
                </div>
                <div className="top_container flex justify-between items-center">
                    <p className="productName flex flex-col font-bold text-base text-black  w-fit">
                        Product name
                        <span className='font-normal text-sm'>
                            Furniture
                        </span>

                    </p>
                    <Button className={'bg-blue-500'}>
                        dsfs
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default ColCenterImage