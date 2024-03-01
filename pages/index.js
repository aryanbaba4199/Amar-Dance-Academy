import { Fragment, } from "react";

import dynamic from "next/dynamic";
import Teams from "@/sections/teams";

import About from "@/sections/about";
import Education from "@/sections/education";

const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))

const LatestBlogs = dynamic(() => import("@/sections/LatestBlogs"))

const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))

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
          
          {/* Feedback Modal */}
          <Feedback />
          {/* ShoveeModal */}
         
        </div>
      </div>
    </Fragment>
  );
}

export default Home
