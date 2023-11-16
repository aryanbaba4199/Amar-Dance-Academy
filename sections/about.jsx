"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import Amar from "../public/images/Amar.png";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  }

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className=' shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          <FaUserCheck /> Who Are We
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          
          <Image
            alt='about image'
            className={
              " shadow-sm transition-all duration-700 translate-x-[-900px] m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src={Amar}
            width={550}
          />
          <p className='shadow-sm transition-all duration-700 translate-x-[-900px]  bg-no-repeat text-center md:text-left text-amber-400 mt-1'>
            Dance Beyond Boundaries
            </p>
          
          
          
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl text-center md:text-left font-semibold text-[#c72c6c] dark:text-[#07d0e5]'>
              Amars Dance Academy
            </p>
            {/* Profil Name */}
            <p className='text-center md:text-left text-amber-400 mt-1'>
            Dance Beyond Boundaries
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-5'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Location
                  </p>
                  <p>
                    <ImLocation />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-[#07d0e5]'>
                  Patna, Bihar, India{" "}
                </p>
              </div>
              {/* Age */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Since
                  </p>
                  <p>
                    
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  2012{" "}
                </p>
              </div>
              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Experience
                  </p>
                  <p>
                    <FaBlackTie />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  1 Year{" "}
                </p>
              </div>
              {/* Project */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                    Projects
                  </p>
                  <p>
                    <BsMenuAppFill />
                  </p>
                </div>
                <p className='text-center md:text-left text-[#c72c6c] dark:text-[#07d0e5]'>
                  3{" "}
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
            <p className='text-gray-600 dark:text-gray-300'>
        {showFullText ? (
          <>
            Amar Dance Academy is an all-purpose destination for a variety of dance forms. It was established in the sacred city of "Patna" in 2012 and has since expanded to a pan-India presence. The academy's main objective is to provide the best platform for ardent dance lovers. Nationally qualified and trained instructors, with substantial experience in the field of dance, lead the academy.

            The academy is committed to securing the future of impassioned candidates by offering placements. Recognizing that talent has no gender and skills have no age barrier, Amar Dance Academy provides almost all types of dance styles with no age restrictions. People of any age can learn, and the academy boasts a faculty specializing in different dance forms.

            In addition to various dance styles, the academy also offers classes for Zumba. Mr. Amrendra Kumar, the founder, is a dedicated and honest leader who manages his work with a lot of positivity.
          </>
        ) : (
          'Amar Dance Academy is an all-purpose destination for a variety of dance forms. It was established in the sacred city of "Patna" in 2012 and has since expanded to a pan-India presence.'
        )}
      </p>
      <button onClick={toggleText} className='text-blue-500 cursor-pointer'>
        {showFullText ? 'Read Less' : 'Read More'}
      </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
