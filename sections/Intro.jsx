import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);

          if (homeEntry.isIntersecting) {
            profileRef.current.classList.add("slide-in");
            introRef.current.classList.add("slide-in");
          } else {
            profileRef?.current?.classList?.remove("slide-in");
            introRef?.current?.classList?.remove("slide-in");
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
      <section id="home">
        <div
          className="min-h-[100vh] overflow-x-hidden px-[20px] md:px-[200px] lg:px-[200px] pt-[80px] md:pt-0 md:flex items-center justify-between shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"
          ref={homeRef}
        >
          <div
            className="translate-x-[-500px] transition-all duration-700 opacity-0"
            ref={introRef}
          >
            <p className="py-2 text-2xl md:text-4xl font-semibold font-sans">
              Welcome to Amar Dance
              <span className='text-[#c72c6c] dark:text-[#e59007]'> Academy</span>
            </p>
            <div className="mt-5 md:mt-10 flex gap-3">
              <Link
                className="text-xl font-semibold rounded border border-red-500 hover:text-white hover:bg-red-500 px-2 py-1"
                href=""
                target="_blank"
              ></Link> 
              <div className="font-serif text-xl">
              <p>Email : amarsdanceacademy</p>
              <p>Mob : 6203443677</p>
              </div>
              
            </div>
          </div>
          <img
            src="https://i.pinimg.com/564x/6a/52/33/6a5233f18276332bd379e2a73e061b27.jpg"
            className="h-[24rem] origin-center mx-2"
          />
          <div
            className="w-auto h-auto bg-cover bg-no-repeat"
            ref={profileRef}
            style={{
              backgroundImage: `url(${"https://res-console.cloudinary.com/dmoygdwk1/media_explorer_thumbnails/cb2c775ca20194c2327be5344f86733f/detailed"})`, // Use Poster1 variable
            }}
          />
        </div>
        <Image
          src="/images/picture1.jpg"
          width={1000}
          height={1000}
          className="w-[200vh]"
        />
      </section>
    </Fragment>
  );
};

export default Intro;
