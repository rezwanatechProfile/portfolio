import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-gray-900 to-red-950"
    >
      <div className="box max-w-screen-lg mx-auto px-10 z-0 h-full">
        <div className="title">
          <span className="block"></span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white"><span></span>
            WELCOME TO THE <br/> DIGITAL SPACE OF REZWANA
          </h1>
        </div>
        
        <div className="role">
          <div className="block"></div>
          <p className="">Take a tour of my portfolio to see how I can bring your digital dreams to life.</p>
        </div>
      </div>
    </div>
  );
}

export default Home