import React from 'react'
import { useState, useEffect } from 'react';

function Contact() {

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const elementPosition = document.getElementById('title-box4').getBoundingClientRect().top;
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
      name="contact"
      className="w-full bg-gradient-to-b from-black to-red-950 p-4 text-white padding-t-200"
    >
      <div className="pb-10 h-full px-10">
      <div className="flex flex-col items-start max-w-screen-lg mx-auto">

        <div id="title-box4" className={showAnimation ? "title-box4" : " "}>
          <h1 className="text-4xl sm:text-5xl font-bold inline">CONTACT ME</h1>
        </div>
      </div>
      <div className="flex flex-col max-w-screen-lg mx-auto md:flex-row">
        <div className="mr-5">
          <div className="gradient-border p-10 mb-5">
            <div className="text-left">
              <p className="mt-5">
                Thanks for visiting my portfolio! If you have any questions,
                comments, or opportunities for collaboration, I would love to
                hear from you.
              </p>
              <p>
                You can reach me by filling out the contact form below, or by
                emailing me directly at{" "}
                <a
                  href="mailto:rezwanatech@gmail.com"
                  className="text-yellow-500"
                >
                  rezwanatech@gmail.com
                </a>
                . I will do my best to get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="items-center pb-8">
          <form
            action="https://getform.io/f/ea2e47df-14b0-4739-a3a4-cea1099118b4"
            method="POST"
            className=" flex flex-col w-full form-box"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Connect
            </button>
          </form>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Contact