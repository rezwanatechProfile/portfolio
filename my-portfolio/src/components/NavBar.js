import React from 'react'
import { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { DiYii } from 'react-icons/di'

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'about'
    },

    {
      id: 2,
      link: 'projects'
    },

    {
      id: 3,
      link: 'experience'
    },

    {
      id: 4,
      link: 'contact'
    }


  ]


  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
      <div className='flex'>
      
      <h1 className='text-5xl font-signature ml-2'>Rez</h1>
      <DiYii size={25}/>
      </div>

      <ul className='hidden md:flex'>
{/* map over the links */}
        {links.map(link => (
          <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link.link}</li>
        ))}
      </ul>

{/* on click change the state */}

      <div
        onClick={() => setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">

{/* if nav is true then show the FaBars*/}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
{/* if nav is false display the links after clicks*/}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">

        {links.map(link => (
        
        <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105'>{link.link}</li>
        
        ))} 
       </ul>
        
      )}

       
    </div>
  )
}

export default NavBar