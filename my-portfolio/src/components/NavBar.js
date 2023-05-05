import React from 'react'
import { useState } from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import { DiYii } from 'react-icons/di'
import { Link } from "react-scroll";

function NavBar() {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'portfolio'
    },

    {
      id: 2,
      link: 'skills'
    },

    {
      id: 3,
      link: 'about'
    },

    {
      id: 4,
      link: 'contact'
    }


  ]


  return (
    <div className='navbar flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
      <div className='flex'>
      
      <h1 className='text-5xl font-signature ml-2 logo'>Rez</h1>
      <svg width=".5em" height="1em">
  <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
    <stop stopColor="#22d3ee" offset="0%" />
    <stop stopColor="#fcd34d" offset="100%" />
  </linearGradient>

  </svg>
      <DiYii size={35} style={{ fill: "url(#blue-gradient)"}}/>
      </div>

      <ul className='hidden md:flex'>
{/* map over the links */}
{links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

{/* on click change the state */}

      <div
        onClick={() => setNav(!nav)} 
        className="cursor-pointer pr-4 z-10 text-gray-00 md:hidden">

{/* if nav is true then show the FaBars*/}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
{/* if nav is false display the links*/}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-red-950 text-gray-400">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link
              onClick={() => setNav(!nav)}
              to={link}
              smooth
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
        
      )}

       
    </div>
  )
}

export default NavBar