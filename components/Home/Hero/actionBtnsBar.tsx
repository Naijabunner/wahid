import Link from 'next/link'
import React from 'react'
import { FaHeart, FaUser } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { LiaOpencart } from 'react-icons/lia'

const ActionBtnsBar = () => {

    const handleSearch = () => {

    }

    const actionsData = [
        {
            id: 1,
            label: 'Name',
            action: handleSearch,
            icon: FaMagnifyingGlass,
        },
        {
            id: 2,
            label: 'Name',
            action: '/cart',
            icon: LiaOpencart,
        },
        {
            id: 3,
            label: 'Name',
            action: '/profile',
            icon: FaUser,
        },
        {
            id: 4,
            label: 'Name',
            action: '/favorites',
            icon: FaHeart,
        },
    ]

    return (
        <div className='w-full h-full flex md:flex-col max-md:py-3 gap-10 justify-center items-center'>
            {
                actionsData.map(({
                    id, label, icon: Icon, action
                }) => {
                    return (
                        typeof action === 'string' ?
                            (
                                <Link key={id} href={action}>
                                    <Icon size={20} color='#8E8E8E' />
                                </Link>
                            ) : <Icon size={20} color='#8E8E8E' />
                    )
                })
            }
        </div>
    )
}

export default ActionBtnsBar