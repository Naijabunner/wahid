
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode[] }) => {
    const [leftbar, centerColOne, centerColTwo, centerLarge, rightbarbar] = children
    return (
        <section className='flex my-5 gap-5 max-md:flex-col-reverse max-w-screen-2xl mx-auto'>
            {leftbar}
            <div className="flex flex-1 max-xl:flex-col-reverse  gap-5">
                <div className="colInnerLayout max-xl:flex-row flex flex-col gap-5">
                    {centerColOne}
                    {centerColTwo}
                </div>
                {centerLarge}
            </div>
            {rightbarbar}
        </section>
    )
}

export default HomeLayout