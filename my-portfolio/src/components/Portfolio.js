import React from 'react'
import car from "../assets/portfolio/carrental.jpg";
import game1 from "../assets/portfolio/game1.jpeg";
import game2 from "../assets/portfolio/game2.jpeg";
import planter from "../assets/portfolio/planterER.jpg";
import project1 from "../assets/portfolio/moviedata.jpg";
import roca from "../assets/portfolio/rocacompany.jpg";
import minipoly from "../assets/portfolio/monopoly.jpg";

function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: car,
      link: 'https://godrivecarrental.herokuapp.com/',
      description: 'GoDrive is a multipage CRUD application that is designed to create car sharing app for the people who wants to rent and host their car in their location. To create this app, I have used MongoDB as Database, node.js and EJS. The goal was to display the content creative way that are interactive and engaging.',
      gitLink:'https://github.com/rezwanatechProfile/GoDrive'
    },
    {
      id: 2,
      src: planter,
      link: 'https://planterandplanters.herokuapp.com/',
      description: 'Plant(ER) is a web app designed to help plant owners take care of their plants. Also this app is a great knowledge base to learn more about different plant species. It was a team project in which I contributed to the wire-framing, backend and also in frontend design.',
      gitLink:'https://github.com/taariqelliott/project-3-planter'
    },
    {
      id: 3,
      src: project1,
      link: 'https://pages.git.generalassemb.ly/rsultana/MovieDatabaseApp/',
      description: 'Search over 1,000,000 movies, latest movies and also find out the top rated movies of the year. I developed this app using third party api and jQuery',
      gitLink:'https://pages.git.generalassemb.ly/rsultana/MovieDatabaseApp/'
    },
    {
      id: 4,
      src: roca,
      link: 'https://rocadc.com/',
      description: 'This website is created for Roca Authentications LLC, used WordPress for development and javaScript',
    },
    {
      id: 5,
      src: minipoly,
      link: 'https://rocadc.com/',
      description: 'Mini poly game is designed and developed for two players using vanila javaScript. Rules to play: Click to start button to move the object through the board and collect $200 as initial cash to start the game. To start players need to roll the dice. After rolling, click on the degisnated box to take your object.',
      gitLink: 'https://github.com/rezwanatechProfile/Minipoly'
    },
    {
      id: 6,
      src: game2,
    },
  ];

  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-red-950 via-gray-900 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline">
            Projects I have developed until now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, description, gitLink }) => (
            <div key={id} className="bg-white shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className='p-5 text-black'>{description}</p>
               
              
              <div className="flex items-end justify-center bottom-[0%]">
               <button className="w-1/2 px-6 pb-10 duration-200 hover:scale-105">
                  <a href={link} target="_blank" rel="noreferrer" className='text-yellow-500'>View Project</a>
                </button>
                
                <button className="w-1/2 px-6 pb-10 duration-200 hover:scale-105">
                  <a href={gitLink} target="_blank" rel="noreferrer" className='text-yellow-500'>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio