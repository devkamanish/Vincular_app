
"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

const GoToHome = () => {
    const router = useRouter();

    const handleHomeClick = ()=>{
        router.push("/")
    }
    
  return (
    <div>
        <img
        
         src="/Home_icon.png"
        className  = "cursor-pointer w-12 h-12"
        onClick = {handleHomeClick}
         alt="" />
    </div>
  )
}

export default GoToHome



