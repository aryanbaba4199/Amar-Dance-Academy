import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import Team1 from "@/public/images/team1.jpg";
import Team2 from "@/public/images/team2.jpg";
import Team3 from "@/public/images/team3.jpg";
import Team4 from "@/public/images/team4.jpg";
import Team5 from "@/public/images/team5.jpg";
import Image from "next/image";

const linkedin = "https://cdn-icons-png.flaticon.com/256/1384/1384014.png"
const inimage = "https://cdn-icons-png.flaticon.com/256/4401/4401407.png"
const fbimage = "https://cdn-icons-png.flaticon.com/256/1384/1384005.png"

const Teamfn = ({ imageSrc, Name, designation }) => (
  <div class="card2">
    <div class="background"></div>
    <div class="logo">
      <Image src={imageSrc} className="team-img" />
      <h3 className="team-name">{Name}</h3>
      <p style={{fontSize : 15}} className="team-name">{designation}</p>
    </div>

    
      <div class="box box1">
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/1384/1384014.png"
            className="svg"
          />
        </span>
      </div>
    

    
      <div class="box box2">
        {" "}
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/4401/4401407.png"
            className="svg"
          />
          
        </span>
      </div>
    

    
      <div class="box box3">
        <span class="icon">
          <img
            src="https://cdn-icons-png.flaticon.com/256/1384/1384005.png"
            className="svg"
          />
        </span>
      </div>
    

    <div class="box box4"></div>
  </div>
);

export default function service() {
  const teammembers = [
    {
      imageSrc:
        Team1,
      Name: "Suchita Singh",
      Designatation: "Service Manager",
    },
    {
      imageSrc:
        Team2,
      Name: "Gopal Gonzales",
      Designatation: "Ofiice Administration",
    },
    {
      imageSrc:
        Team3,
      Name: "Jacky Kumar",
      Designatation: "Program Co-ordinator",
    },
    {
      imageSrc:
        Team4,
      Name: "Reshmi Kumari",
      Designatation: "Branch Manager",
    },
    {
      imageSrc:
        Team5,
      Name: "Aasish Gaurav",
      Designatation: "HOD",
    },
    
  ];

  return (
    <>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='education'
        
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <IoSchoolSharp /> Our Team
        </h2>
        </section>
       
      
      <div className="services-div">
        {teammembers.map((team, index) => (
          <Teamfn
            key={index}
            imageSrc={team.imageSrc}
            Name={team.Name}
            designation={team.Designatation}
          />
        ))}
      </div>
    </>
  );
}
