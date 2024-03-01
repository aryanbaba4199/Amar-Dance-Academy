"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import Image from "next/image";

import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className="shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden"
        id="techStack"
        ref={techStackRef}
      >
        <h2 className="text-3xl font-bold text-center p-4 flex justify-center items-center gap-3">
          <FaLaptopCode /> We Upskills
        </h2>

        <div
          className="pop-down transition-all w-fit duration-500 m-auto rounded-lg border border-black dark:border-white border-solid overflow-hidden"
          ref={buttonsRef}
        >
          <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Advance" ? "bg-red-600" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Advance
          </button>
          {/* <button
            className={`w-[120px] md:w-[150px] p-2 font-bold ${
              section === "Good" ? "bg-red-600" : null
            } transition-all border-l border-r border-black dark:border-white border-solid`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Good
          </button> */}
          {/* <button
            className={`w-[100px] md:w-[150px] p-2 font-bold ${
              section === "Familiar" ? "bg-red-600" : null
            } transition-all`}
            onClick={(e) => {
              setSection(e.target.innerText);
              if (section !== e.target.innerText)
                techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            Familiar
          </button> */}
        </div>

        <div
          className="pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5"
          ref={techBoxesRef}
        >
          <div className="mt-4">
            <Image
              src="/images/skill1.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Contemporary Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Contemporary Dance
            </h2>
            <p className="text-blue-700">
              Connect your mind and body through fluid dance movements from the
              graceful contemporary dance
            </p>
          </div>
          <div className="mt-4">
            <Image
              src="/images/skill2.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Bollywood Dance
            </h2>
            <p className="text-blue-700">
              Learn to move and groove on bollywood songs from our talanted and
              experienced choreographers
            </p>
          </div>

          <div className="mt-4">
            <Image
              src="/images/skill3.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Hip Hop
            </h2>
            <p className="text-blue-700">
              Learn wide range of street style dance forms such as loking ,
              popping, breaking etc. from our choreographers
            </p>
          </div>

          <div className="mt-4">
            <Image
              src="/images/skill4.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Folk
            </h2>
            <p className="text-blue-700">
              A dandce that reflects the life of the people of a certain Country
              or Reigion
            </p>
          </div>
          
          <div className="mt-4">
            <Image
              src="/images/skill5.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Funk
            </h2>
            <p className="text-blue-700">
              A Fusion of several Genres including JAZZ, HIPHOP and DISCO
            </p>
          </div>
          <div className="mt-4">
            <Image
              src="/images/skill6.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              FreeStyle
            </h2>
            <p className="text-blue-700">
              A spontanious movement in your body that takes a form of dance
            </p>
          </div>
          <div className="mt-4">
            <Image
              src="/images/skill7.jpg"
              width={300} height={300}
              className="md:w-48 w-[100vh] px-4"
              alt="Bollywood Dance"
            />
            <h2 className="text-center text-xl font-semibold text-pink-700 font-serif">
              Salsa
            </h2>
            <p className="text-blue-700">
              A Latin American Dance music that elements Jazz and Rock
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
