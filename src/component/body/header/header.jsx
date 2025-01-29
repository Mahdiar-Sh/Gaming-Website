import React, { useState } from "react";
import Game from "./gamebox.jsx";
import "./header.css";
export default function Header() {
  const [box] = useState([
    {
      id: 1,
      name: "The Witcher 3",
      date: "May 19 , 2015",
      rating: 93,

      title:
        "The Witcher 3: Wild Hunt is an open-world RPG where players follow Geralt of Rivia, a monster hunter, in his quest to find his adopted daughter, Ciri. Set in a richly detailed and expansive world, the game offers a deep narrative and complex choices that affect the game's outcome.",
      addres: "img/Hero.jfif",
    },
    {
      id: 2,
      name: "Red Dead Redemtion",
      date: "Oct 26 , 2018",
      rating: 96,

      title:
        "In This Open-World Action-Adventure Game, Players Control Arthur Morgan, An Outlaw Navigating The Downfall Of The Wild West. Set In A Vast, Immersive World, The Game Follows Arthur's Struggles With Loyalty, Survival, And Morality As His Gang Faces Opposition From Law Enforcement.",
      addres: "img/RDRcover.jfif",
    },
    {
      id: 3,
      name: "The Last of Us!!",
      date: "Jun 19 , 2020",
      rating: 88,
      title:
        "The Last of Us Part 11 continues The Emotional Journey Of Ellie, Now Older And Seeking Revenge. Set In A Post-apocalyptic World, The Game Combines stealth And Action Forcing Players To Confront Moral Dilemmas And The Harsh Consequences Of Violence",
      addres:
        "image/2023-11-the-last-of-us-part-2-remaster-cover-66cc7d112b5676090d02d212.jpg",
    },
    {
      id: 4,
      name: "Ghost Of Tushima",
      date: "Jul 17 , 2020",
      rating: 83,

      title:
        "Set In Feudal Japan, Players Follow Jin Sakai, A Samurai Warrior Defending His Home From Mongol Invaders. Blending Stealth, Swordplay, And Open-World Exploration, The Game Is A Tribute To Classic Samurai Films And The Code Of Honor That Drives Its Protagonist.",
      addres: "image/ghost-of-tsushima-background-block-01-ps4-en-21jul20.webp",
    },
    {
      id: 5,
      name: "God Of War: Ragnorag",
      date: "Apr 20 , 2018",
      rating: 90,

      title:
        "In This Soft Reboot, Kratos Embarks On A Journey With His Son Atreus In The World of Norse Mythology. Combining Intense Combat With A Rich Narrative, The Game Explores Themes Of Fatherhood, And The Gods' Power Over Fate.",
      addres: "img/GOW.jfif",
    },
  ]);
  const [imgHeader] = useState([
    { id: 1, addres: "image/Games Selected1.png" },
    { id: 2, addres: "image/Games Selected2.png" },
    { id: 3, addres: "image/Games Selected3.png" },
    { id: 4, addres: "image/Games Selected4.png" },
    { id: 5, addres: "image/Games Selected5.png" },
  ]);

  const [fade, setFade] = useState(false);
  const [info, setInfo] = useState({
    id: 1,
    name: "The Witcher 3",
    date: "May 19 , 2015",
    rating: 93,
    title:
      "The Witcher 3: Wild Hunt is an open-world RPG where players follow Geralt of Rivia, a monster hunter, in his quest to find his adopted daughter, Ciri. Set in a richly detailed and expansive world, the game offers a deep narrative and complex choices that affect the game's outcome.",
    addres: "img/Hero.jfif",
  });
  function cheangImage(event) {
    setFade(true);
    setTimeout(() => {
      let newHeader = box.filter((x) => event === x.id);
      setInfo(newHeader[0]);
      setFade(false);
    }, 600);
  }
  return (
    <section className="z-30 relative mt-24 flex flex-row py-[50px]">
      <img
        src={info.addres}
        className={`anim w-full h-full z-10 absolute bottom-0 top-0 ${
          fade ? "hiden" : " "
        }`}
        alt=""
      />
      <div className="bg-gradient-to-r from-[#1C1B29] from-20% z-20 absolute bottom-0 left-0 w-full h-full"></div>
      <div className="bg-gradient-to-t from-[#1C1B29] to-10% z-20 absolute bottom-0 left-0 w-full h-full"></div>
      <div className="p-16 z-30 w-1/3">
        <div className="space-y-4">
          <h1
            className={`text-3xl anim font-bold text-white ${
              fade ? "hiden" : " "
            }`}
          >
            {info.name}
          </h1>
          <p
            className={`text-lg text-justify h-[200px] anim text-white ${
              fade ? "hiden" : " "
            } `}
          >
            {info.title}
          </p>
        </div>
        <div className="flex flex-row my-5 items-center justify-center">
          <div>
            <img
              src="img/icon/simple-icons_metacritic.svg"
              alt=""
              className="inline mr-2"
            />
            <span className="text-white">
              <span
                className={`${
                  fade ? "hiden" : " "
                } text-yellow-500 anim text-xl font-bold`}
              >
                {info.rating}{" "}
              </span>
              /100
            </span>
          </div>
          <div className="ml-10">
            <img src="img/icon/uiw_date.svg" alt="" className="inline mr-2" />
            <span className={`text-white anim ${fade ? "hiden" : " "}`}>
              {info.date}
            </span>
          </div>
        </div>
        <div className="flex flex-row mt-10 text-center justify-center space-x-10 items-center">
          <div>
            <h1 className="text-white text-xl">Available for :</h1>
            <p className="text-gray-400 text-md">Pc - Ps 4 - Xbox One</p>
          </div>
          <div>
            <h1 className="text-white text-xl">Genre :</h1>
            <p className="text-gray-400 text-md">Action RPG</p>
          </div>
        </div>
        <div className="space-x-5 mt-10 text-center">
          <button className="border-2 border-gray-500 text-gray-500 text-center w-[25%] py-1 rounded-md">
            Pc
          </button>
          <button className="border-2 border-gray-500 text-gray-500 text-center w-[25%] py-1 rounded-md">
            Ps 4
          </button>
          <button className="border-2 border-gray-500 text-gray-500 text-center w-[25%] py-1 rounded-md">
            Xbox One
          </button>
        </div>
        <div className="flex flex-row justify-center mt-10">
          <button className="mx-3 border hover:shadow-sm hover:shadow-[#c94830] border-[#c94830] w-[120px] rounded-xl py-2 bg-[#c94830] text-white font-bold duration-200 cursor-pointer">
            Buy Now
          </button>
          <button className="mx-3 border border-[#c94830] w-[170px] rounded-xl py-2 text-[#c94830] duration-200 cursor-pointer font-bold -translate-x-3 focus:bg-[#c94830]">
            Review
          </button>
        </div>
      </div>
      <div className="flex z-30 flex-col justify-end space-y-6">
        <div className="flex flex-row items-center my-5 justify-between">
          <h1 className=" text-2xl text-white font-bold">
            The Most
            <span className="text-2xl text-[#c94830] font-bold"> Popular </span>
            Games
          </h1>
          <div className="space-x-3">
            <button className="border-4 focus:border-white border-gray-500 duration-200 p-4 rounded-sm">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 5.9H1M1 5.9L6.4 0.5M1 5.9L6.4 11.3"
                  stroke="#979797"
                />
              </svg>
            </button>
            <button className="border-4 active focus:border-white border-gray-500 duration-200 p-4 rounded-sm">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.9H12M12 5.9L6.6 0.5M12 5.9L6.6 11.3"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          {imgHeader.map((x) => (
            <Game id="boxcss" key={x.id} chenge={cheangImage} {...x}></Game>
          ))}
        </div>
      </div>
    </section>
  );
}
