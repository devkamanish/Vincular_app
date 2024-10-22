
"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import {Image} from 'next/image'

const GoToHome = () => {
    const router = useRouter();

    const handleHomeClick = ()=>{
        router.push("/")
    }
    
  return (
    <div>
        <Image
        height = {100}
        width = {200}
         src="/Home_icon.png"
        className  = "cursor-pointer w-12 h-12"
        onClick = {handleHomeClick}
         alt="" />
    </div>
  )
}

export default GoToHome



