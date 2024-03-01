import React from "react";
import Nav from "@/layout/navbar/Navbar";
import Amar from "@/public/images/amar.jpg";
import Image from "next/image";

const aboutus = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-24">
        <div className="px-8 ">
          <h2 className="text-3xl text-blue-600 font-semibold">About</h2>
          <h2 className="ml-12 text-4xl font-serif font-semibold text-pink-600">
            Amar Dance Academy
          </h2>
        </div>
        <div>
          <div className="px-16 font-serif  mt-8">
            <h5>
              <text className="font-semibold text-pink-600 text-lg">
                Amar Dance Academy
              </text>{" "}
              stands as a versatile hub catering to diverse dance forms. Founded
              in 2012 in the sacred city of Patna, it has now expanded its
              footprint across India. Committed to offering the finest platform
              for passionate dance enthusiasts, our academy boasts nationally
              qualified instructors with extensive experience. Ensuring the
              security of our candidates' futures, we facilitate placements.
              Recognizing that talent knows no gender and skills have no age
              limit, we welcome individuals of all ages to learn various dance
              styles. Our faculty excels in different dance forms, and we also
              offer Zumba classes. Spearheaded by the dedicated and
              positive-minded Mr. Amrendra Kumar, our academy operates branches
              in Bazar Samiti, Bhoothnath, Hanuman Nagar, and Rajendra Nagar.
            </h5>
          </div>
          <div className="flex md:flex-row flex-col justify-between  px-8 w-[100%] gap-8 mt-8 ">
            <div className="md:w-[50%] w-[100%] flex flex-col justify-center items-center shadow-2xl shadow-pink-600 px-4">
              <p className="text-blue-600 font-serif text-xl">
                Meet Our Choreographer
              </p>
              <p className="font-semibold text-2xl text-pink-600 font-serif">
                Amar Raj
              </p>
              <p className="">
                A creative and inventive Choreographer who belongs from Patna.
                He comes from a middle class household yet he followed his
                passion of dance from the age of 12. He runs an Academy of
                Bihar. He has made many efforts to improve the depriable
                condition of dance in Bihar. To conclude, He has worked for many
                celebrity shows.
              </p>
            </div>
            <div className="md:w-[50%] w-[100%] shadow-xl shadow-pink-600 px-4">
              <Image
                src={Amar}
                alt="Amar Raj"
                className="w-[70%] filter contrast-125 brightness-125 "
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-8 mt-8 px-8 ">
          <div className="flex justify-cente r items-center flex-col shadow-2xl shadow-pink-600 px-4">
            <p className="text-xl text-pink-600 font-serif font-semibold">
              Our Mission
            </p>
            <p>
              Dance is a knack. For some it is just a hobby for some it’s their
              life. Our resolution is basically to prove that dance is not just
              an option or leisure activity but also a good career choice for
              the one’s who believe in dance . Talant is never defined by it’s
              age rather it is expounded by courage to fulfill it. Amar dance
              academy be of the opionion that age shouldn’t be a barrier to
              those who have the desire to fulfill their dreams.
            </p>
          </div>
          <div className="flex justify-cente r items-center flex-col shadow-2xl shadow-pink-600 px-4 mb-4">
            <p className="text-xl text-pink-600 font-serif font-semibold">
              Our Vision
            </p>
            <p>
              Dance is a talent. For some, it's merely a hobby; for others, it's
              life itself. Our commitment is to demonstrate that dance
              transcends being just an option or leisure pursuit; it's a viable
              career path for those who believe in its power. Talent knows no
              age; it's defined by the courage to pursue one's dreams. At Amar
              Dance Academy, we firmly believe that age should never hinder
              those who aspire to realize their ambitions.
            </p>
          </div>
        </div>
        <div>
          <div className="mb-60">
            <div className="flex text-2xl font-serif font-semibold justify-center items-center mt-8">
              <p className="text-purple-600 border-2 border-purple-600 p-2 px-4">Why us</p>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center gap-4 px-16 mt-4">
              <div className="flex flex-col justify-center items-center gap-4 md:w-[20%] w-[100%] shadow-lg shadow-pink-600 px-4 py-2">
                <p className="text-pink-600 font-semibold text-xl font-serif">
                  Loyality
                </p>
                <p>We are loyal towards our work and students</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 md:w-[20%] w-[100%] shadow-lg shadow-pink-600 px-4 py-2">
                <p className="text-pink-600 font-semibold text-xl font-serif">
                  Efficiency
                </p>
                <p>We belive in competence with tota energy</p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 md:w-[20%] w-[100%] shadow-lg shadow-pink-600 px-2 py-4">
                <p className="text-pink-600 font-semibold text-xl font-serif">
                  Reliability
                </p>
                <p className="text-sm">
                  we provide a platform that give high gross income capabilities
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 md:w-[20%] w-[100%] shadow-lg shadow-pink-600 px-4 py-2">
                <p className="text-pink-600 font-semibold text-xl font-serif">
                  Commitment
                </p>
                <p>That only limit to your imagination is commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutus;
