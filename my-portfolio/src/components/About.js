import React from "react";
import { useState, useEffect } from 'react';

const About = () => {
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

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-red-950 to-black text-white padding-t-200 padding-b-200"
    >
      <div className="max-w-screen-lg mx-auto px-10 flex flex-col justify-center w-full h-full margin-200">
        {/* <div className="pb-8" id='title-box'>
          <h1 className="text-4xl sm:text-5xl font-bold inline">ABOUT</h1>
        </div> */}

        <div id="title-box1" className={showAnimation ? "title-box" : " "}>
          <h1 className="text-4xl sm:text-5xl font-bold inline">ABOUT</h1>
        </div>

        <div className="gradient-border p-10">
          <div className="text-center">
            <h3 className="text-2xl p-2 inline">Who I am.</h3>
          </div>

          <div className="text-left">
            <p className="mt-5">
              Hi, I am Rezwana, an experienced full stack developer with a
              passion for building innovative and functional web applications.
              With more than 5 years of web developing experience, I have honed
              my skills in both front-end and back-end development, as well as
              in database management.
            </p>
            <br />
            <br />
            <p className="">
              I served as Digital Learning Developer in Buchanan & Edwards and
              also worked as Application Devloper in Ventura Limited. client was
              US department of state. Currenlty she possesses Secret clearence.
              From conceptualization to deployemnt, I ensure the project is
              delivered on time, within budget and to exact specifications.
            </p>
            <br />
            <p className=""></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;