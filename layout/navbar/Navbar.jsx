"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";
import {auth,googleProvider } from "@/utils/firebase"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);


  
  // ------------Handling Sign Out --------------------
  const signOutHandler = async () => {
    try{
      await auth.signOut();
      window.location.href = "/";
    }catch(err){
      console.log("Error:", err);
    }
  }

  // ------------Handling google sign in ----------------
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      
    } catch (error) {
      console.error("error", error);
    }
  };

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='w-full h-[70px] px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
        style={{ top: top }}
      >
        {/* Name Logo */}
        <p className='text-gray-400 flex'>
          <img 
            src="https://i.pinimg.com/564x/cc/b3/17/ccb317679fd2b7b7717bd7a1e36598ee.jpg"
            width={40}
          />
        </p>
        <div className='h-full flex gap-4'>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-[#c72c6c] dark:text-[#07d0e5] font-semibold"}
              href={navbar.link}
              key={navbar.name}
            >
              <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#07d0e5] transition-all'>
                {navbar.name}
              </div>
            </Link>
          ))}
          <div className="flex justify-center items-center font-serif text-pink-600 font-semibold">
            
          {auth.currentUser ? (
              <button onClick={signOutHandler}
              className='text-lg p-2  font-semibold bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded'
            >Log out</button>
            ) : (
              <button
              onClick={signInWithGoogle}
              className='text-lg p-2 font-semibold bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 rounded'
            >Log in</button>
            ) }
          </div>
        </div>
        {/* Toggle Theme button */}
        <div className='flex items-center gap-4'>
          <button
            className='text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110'
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
