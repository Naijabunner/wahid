import Link from 'next/link'
import React from 'react'
import { FaFacebookSquare, FaGooglePlusG, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const socialData=[
    {
        id:1,
        label:'Name',
        icon:FaGooglePlusG,
        link:'#'
    },
    {
        id:2,
        label:'Name',
        icon:FaXTwitter,
        link:'#'
    },
    {
        id:3,
        label:'Name',
        icon:FaFacebookSquare ,
        link:'#'
    },
    {
        id:4,
        label:'Name',
        icon:FaLinkedin,
        link:'#'
    },
]

const SocialBar = () => {
   
  return (
    <div className='w-full h-full flex md:flex-col max-md:py-3 gap-10 justify-center items-center'>
    {
        socialData.map(({
            id,label, icon: Icon, link
        })=>{
            return(
                <Link key={id} href={link}>
                    <Icon size={20} color='#8E8E8E'/>
                </Link>
            )
        })
    }
    </div>
  )
}

export default SocialBar