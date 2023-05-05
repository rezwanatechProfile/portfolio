import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import sql from "../assets/sql.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import MongoDB from "../assets/mongo.png";
import python from "../assets/python.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: sql,
      title: "SQL",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: node,
      title: "Node.js",
      style: "shadow-green-300",
    },
    {
      id: 8,
      src: python,
      title: "GitHub",
      style: "shadow-yellow-200",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-red-950 w-full padding-t-200 padding-b-100"
    >
      <div className="max-w-screen-lg px-10 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="font-bold p-2 inline title-box margin-100">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            MY SKILLS
          </h1>
        </div>

        <div className='gradient-border p-10 text-center'>
          <h3 className="p-2 inline">
            Technologies I have learned and used creating projects.
          </h3>

          <p className="py-6"></p>
        </div>


        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-7 text-center pt-4 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience