import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Teams from "@/sections/teams";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {
  
  return (
    <Fragment>
     
      <div className="mt-8">
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          {/* <Experience /> */}
          <Teams />

          {/* Projects */}
          {/* <Projects /> */}
          {/* SocialMedia */}
          
          <SocialMedia />
          

          {/* LatestBlog */}
          <LatestBlogs />
          {/* Apps */}
          {/* <Apps /> */}
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          <Feedback />
          {/* ShoveeModal */}
         
        </div>
      </div>
    </Fragment>
  );
}

export default Home
