import React from 'react'

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className="header pb-10 flex gap-1 flex-col justify-center items-center">
            <h2 className=' text-black text-2xl md:text-4xl font-bold'>
                {title}
            </h2>
            <div className='h-[3px] w-[122px]  bg-[#853737]' />
        </div>
    )
}

export default SectionTitle