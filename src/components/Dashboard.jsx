import React from 'react'
import Image from "next/image";
import Link from "next/link"

const Dashboard = () => {
  return (
    
    <div className="h-screen bg-[#D3B8A1] flex flex-col justify-between items-center">
      {/* Main Section */}
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl font-mono mb-8">Select Service</h1>
          
          {/* Services Section */}
          <div className="flex space-x-12">
            <Link href="#">
              <Image src="/BIS_logo.png" alt="Service 1" width={100} height={100} />
            </Link>
            <Link href="#">
              <Image src="" alt="Service 2" width={100} height={100} />
            </Link>
          </div>
        </div>

        {/* Cute Animated Character */}
        <div className="absolute right-10 bottom-10">
          <Image
            src="/"
            alt="Cute Character"
            width={250}
            height={250}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4">
        <p className="text-sm">Made with <span className="text-red-500">🔥</span></p>
      </footer>
    </div>
  )
}

export default Dashboard 
