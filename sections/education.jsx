"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";
import Neha from "@/public/images/Neha.jpg"
import Amar from "@/public/images/amar.jpg"

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  // useEffect(() => {
  //   const getScreenWidth = () =>
  //     window.innerWidth ||
  //     document.documentElement.clientWidth ||
  //     document.body.clientWidth;

  //   const educationObserver = new IntersectionObserver(
  //     ([educationEntry]) => {
  //       setIsEducation(educationEntry.isIntersecting);
  //     },
  //     {
  //       rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
  //     }
  //   );

  //   educationObserver.observe(educationRef.current);

  //   if (isEducation) {
  //     educationBoxesRef.current.classList.add("pop-up-child");
  //   } else {
  //     educationBoxesRef.current.classList.remove("pop-up-child");
  //   }
  // }, [isEducation]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='education'
        ref={educationRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <IoSchoolSharp /> Pillars of Strength
        </h2>

        <div>
          <div>
            <Image
              src={Neha}
              alt="Neha Singh"
              className=" md:w-40 w-[100vh] px-4 rounded-xl"
            />
            <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-serif font-semibold text-pink-600">Neha Singh</p>
            <p className="font-serif text-pink-600">( Director )</p>
            </div>
          </div>
          <div>
            <Image
              src={Amar}
              alt="Amarendra Kumar"
              className=" md:w-40 w-[100vh] px-4 rounded-xl"
            />
            <div className="flex flex-col justify-center items-center">
            <p className="text-lg font-serif font-semibold text-pink-600">Amrendra Kumar</p>
            <p className="font-serif text-pink-600">( CEO )</p>
            </div>
          </div>
        </div>
      </section>
      
    </Fragment>
  );
};

export default Education;
