import React from "react";
import Nav from "@/layout/navbar/Navbar";

const services = () => {
  return (
    <>
      <Nav />
      <div>
        <div className="flex justify-center items-center md:mt-16 mt-32">
          <p className="text-2xl text-pink-600 font-serif font-semibold">
            We Provide -{" "}
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center md:w-[40%] w-[100%] md:h-[60vh] h-auto px-8 mt-4 shadow-xl shadow-pink-600 py-2">
            <p className="font-serif text-xl font-semibold text-pink-600">
              Zumba Instructor
            </p>
            <p>
              The academy will check qualification The experience in this field,
              which also includes of how many casses taken as well as marketing
              strategy . The academy will see how innovative or inventive the
              candidate is. The academy will make sure to notice i he candidate
              is well accquianted with the dance forms in not just on pratical
              terms but also therotically. Flawlessness is a must in their art.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center md:w-[40%] w-[100%] md:h-[60vh] h-auto px-8 mt-4 shadow-xl shadow-pink-600 py-2">
            <p className="font-serif text-xl font-semibold text-pink-600">
              Event Management
            </p>
            <p>
              We will represent ourselves as dance troop. We will provide
              choreographers. We will give equity of 15% to the event management
              for appointing us from the fees received for dance. We believe in
              work at peace so we will charge 25% at the time of booking , 50% a
              day before function and the rest amount just before the function
              starts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default services;
