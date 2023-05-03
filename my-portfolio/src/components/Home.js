import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function Home() {
  return (
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-red-950">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Designed by Rezwana, an expereinced Full Stack Developer.</h2>
      
      <div>
        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
          Portfolio
          <span className="group-hover:rotate-90 duration-300">
          <MdKeyboardDoubleArrowRight size={25} className="ml-1"/>
          </span>
        </button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Home