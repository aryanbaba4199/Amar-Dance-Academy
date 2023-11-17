"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import Image from "next/image";

// ... (imports)

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);

          // Class manipulation moved here
          if (homeEntry.isIntersecting) {
            profileRef.current.classList.add("slide-in");
            introRef.current.classList.add("slide-in");
          } else {
            profileRef?.current?.classList.remove("slide-in");
            introRef.current.classList.remove("slide-in");
          }
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);
    }
  }, [homeRef]);

  return (
    <Fragment>
      <Head>
        
        <title>Amars Dance Academy</title>
      </Head>
      <section id='home'>
        <div
          className='min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm'
          ref={homeRef}
        >
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0'
            ref={introRef}
          >
            
            {/* Profile Name */}
            {/* <p className='text-2xl md:text-4xl py-2 font-semibold font-sans'>
              Amar Dance
              <span className='text-[#c72c6c] dark:text-[#e59007]'>
                {" "}
                Academy <span className='text-amber-500'>|</span>
              </span>
            </p> */}
            <div className='mt-5 md:mt-10 flex gap-3'>
              
              <p className='py-2 text-2xl md:text-4xl font-semibold font-sans'>
              Welcome to
            </p>
              {/* Download CV Button */}
              <Link
                className='text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1'
                href=""
                target='_blank'
              ></Link>
            </div>
          </div>
          <img
          src="https://res-console.cloudinary.com/dmoygdwk1/media_explorer_thumbnails/cb2c775ca20194c2327be5344f86733f/detailed"
            alt = "Slider Image"
        />
        <Link
                className='text-white text-xl font-semibold rounded top-10 bg-red-400 hover:bg-red-500 px-2 py-1'
                href={"#getInTouch"}
              >
                Join us
              </Link>
              <img 
            src="https://i.pinimg.com/564x/6a/52/33/6a5233f18276332bd379e2a73e061b27.jpg"
            className="h-[24rem] origin-center mx-2"
          />
          {/* Image */}
          <div
            className="w-auto h-auto bg-cover bg-no-repeat"
            ref={profileRef}
            style={{
              backgroundImage: `url(${"https://res-console.cloudinary.com/dmoygdwk1/media_explorer_thumbnails/cb2c775ca20194c2327be5344f86733f/detailed"})`, // Use Poster1 variable
            }}
          />
          
          
        </div>
        
      </section>
    </Fragment>
  );
};

export default Intro;
