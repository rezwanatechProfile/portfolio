import React from 'react'
import { useState, useEffect } from 'react';
import car from "../assets/portfolio/carrental.jpg";
import game2 from "../assets/portfolio/game2.jpeg";
import planter from "../assets/portfolio/planterER.jpg";
import project1 from "../assets/portfolio/moviedata.jpg";
import roca from "../assets/portfolio/rocacompany.jpg";
import minipoly from "../assets/portfolio/monopoly.jpg";

function Portfolio() {

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const elementPosition = document.getElementById('title-box1').getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      if (elementPosition - windowHeight <= scrollPosition) {
        setShowAnimation(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
      link: 'https://rezwanatechprofile.github.io/tamagotchi/',
      description: 'My first attempt to develop a Tamagotchi game using JavaScript. User will be able to Feed, play and have fun with panda. If user hit 100% of Hunger, boredom or sleepiness, panda will die. If user hit the highest level of fun and energy, panda will win the game. If panda hits 10 years of his age, then he become adult to have partner.',
      gitLink: 'https://github.com/rezwanatechProfile/tamagotchi'
    },
  ];

  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-red-950 via-gray-900 to-black w-full text-white padding-t-200 padding-b-100"
    >
      <div className="max-w-screen-lg mx-auto px-10 flex flex-col justify-center w-full h-full">
        {/* <div className="font-bold p-2 inline title-box">
          <h1 className="sm:text-5xl font-bold text-white">
            PROJECTS
          </h1>
        </div> */}
         <div id="title-box1" className={showAnimation ? "title-box1" : " "}>
          <h1 className="text-4xl sm:text-5xl font-bold inline">PROJECTS</h1>
        </div>
        <div className="gradient-border p-10 mb-5">
          <div className="text-center">
            <h3 className="text-2xl p-2 inline">What I have created.</h3>
          </div>

          <div className="text-left">
            <p className="py-6">
              A showcase of some of the web applications I have developed as a full stack developer. Each project displayed here showcases my expertise in various front-end and back-end technologies, including but not limited to HTML, CSS, JavaScript, React, Node.js, Python, and MongoDB. 
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-5 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, description, gitLink }) => (
            <div
              key={id}
              className="text-white shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-5">{description}</p>

              <div className="flex items-end justify-center bottom-[0%]">
                <button className="w-1/2 px-6 pb-5 duration-200 hover:scale-105">
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-500"
                  >
                    View Project
                  </a>
                </button>

                <button className="w-1/2 px-6 pb-5 duration-200 hover:scale-105">
                  <a
                    href={gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-500"
                  >
                    View Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio