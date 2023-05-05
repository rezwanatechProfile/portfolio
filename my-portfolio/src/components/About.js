import React from "react";
import { useState, useEffect } from 'react';
import myImage from "../assets/pic1.jpeg";

const About = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const elementPosition = document.getElementById('title-box3').getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      if (elementPosition - windowHeight <= scrollPosition) {
        setShowAnimation(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-red-950 to-black text-white padding-t-200 padding-b-200"
    >
      <div className="max-w-screen-lg mx-auto px-10 flex flex-col justify-center w-full h-full margin-200">
        <div id="title-box3" className={showAnimation ? "title-box3" : " "}>
          <h1 className="text-4xl sm:text-5xl font-bold inline">ABOUT</h1>
        </div>

        <div className="gradient-border p-10">
          <div className="text-center">
            <h3 className="text-3xl p-2 inline">Who I am.</h3>
          </div>

          <div className="flex justify-between">
            <div className="firstDiv">
              <img
                src={myImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full m-5"
              />
            </div>
            <div className="text-left ml-5 secondDiv">
              <p className="mt-5 tracking-widest">
                Hi, I'm Rezwana, I love building designing and developing web
                applications although my love for technology did not start at my
                early age, although I've been always fascinated by the way it
                has transformed our world ever since. 
                <br />
                <br />I started my career as a
                software tester in SEC, used automation testing which hit my
                affection for coding and then I was craving to learn and have a solid
                coding background in Information Technology. This is how my journey to become developer started.
              </p>
              
            </div>
          </div>

          <div>
            <p className="tracking-widest">
              Throughout my career, I've had the opportunity to work on a
              variety of projects, ranging from small startups to large
              enterprise solutions. Since I'm a working mom and natural
              problem-solver, I enjoy everyday multitasking and finding creative
              solutions for complex problems surrounding me.
            </p>
            <br />
            <p className="tracking-widest">
              Besides coding, I enjoy Journaling and Outdoor running, and I
              believe that maintaining a healthy work-life balance is essential
              for success and happiness. I'm a strong communicator and enjoy
              collaborating with team members to achieve the goal on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;