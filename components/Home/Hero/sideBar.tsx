import React, { ReactNode } from 'react'

const SideBar = ({ children }: { children: ReactNode }) => {
    return (
        <div className=" bg-foreground flex-1  md:max-w-[90px]">
            {children}
        </div>
    )
}

export default SideBar