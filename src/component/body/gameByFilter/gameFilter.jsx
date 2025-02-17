import React, { useState } from "react";
import "./gameFilter.css";
import BoxSearch from "../trendingGame/trendingGameBox.jsx";
import BtnFilter from "./btnFilter.jsx";
export default function GameFilter() {
  const [btnFilter] = useState([
    "Survival",
    "Strategy",
    "Team-Up",
    "Racing",
    "Samurai",
    "Shooting",
    "Sports",
    "Battel",
    "RPG",
    "Action",
  ]);
  const [btnOnline, setBoxOnline] = useState(false);
  const [btnFree, setBoxFree] = useState(false);
  const [year, setYears] = useState(2000);
  const [rating, setrating] = useState(0);
  const [gameBox] = useState([
    {
      id: 1,
      name: "the Witcher 4",
      date: 2025,
      rating: 90,
      price: 50,
      off: 15,
      totalPrice: 1,
      addres: "img/witcher4.png",
    },
    {
      id: 2,
      name: "Black Myth Wukong",
      date: 2020,
      rating: 98,
      price: 60,
      off: 0,
      totalPrice: 1,
      addres: "img/black-myth-wukong-1cm8h-1000x1333-1701930889.png",
    },
    {
      id: 9,
      name: "Apex Legends",
      date: 2019,
      rating: 88,
      price: 0,
      off: 0,
      totalPrice: 1,
      addres: "img/Apex Legend.png",
    },
    {
      id: 6,
      name: "Assassing Creed Mirage",
      date: 2023,
      rating: 84,
      price: 50,
      off: 0,
      totalPrice: 1,
      addres: "img/Assassin.png",
    },
    {
      id: 4,
      name: "Mortal Combat 11",
      date: 2022,
      rating: 88,
      price: 80,
      off: 12,
      totalPrice: 1,
      addres: "img/Mortal Kombat 11.png",
    },
    {
      id: 8,
      name: "Pes 2021",
      date: 2021,
      rating: 73,
      price: 45,
      off: 0,
      totalPrice: 1,
      addres: "img/PES 2021.png",
    },
    {
      id: 5,
      name: "Spider-Man 2",
      date: 2022,
      rating: 85,
      price: 100,
      off: 5,
      totalPrice: 1,
      addres: "img/marvels spide rman.png",
    },
    {
      id: 3,
      name: "Alen Wake 2",
      date: 2018,
      rating: 93,
      price: 42,
      off: 0,
      totalPrice: 1,
      addres: "img/AlanWake.png",
    },
    {
      id: 7,
      name: "Far Cry 5",
      date: 2018,
      rating: 78,
      price: 60,
      off: 0,
      totalPrice: 1,
      addres: "img/Far cry 5.png",
    },
    {
      id: 10,
      name: "Resident Evil4: Remake",
      date: 2023,
      rating: 93,
      price: 60,
      off: 30,
      totalPrice: 1,
      addres: "img/Resident Evil.png",
    },
  ]);
  function disable(event) {
    event.preventDefault();
    setBoxOnline(!btnOnline);
  }
  function disable1(event) {
    event.preventDefault();
    setBoxFree(!btnFree);
  }
  function chengYears(event) {
    setYears(event.target.value);
  }
  function chengRanting(event) {
    setrating(event.target.value);
  }
  return (
    <div className="mt-28 lg:!mx-0 mx-3">
      <form className="text-center" action="">
        <h1 className="text-center text-2xl text-white">Game By Filter</h1>
        <p className="text-center text-gray-500 text-xs p-2">
          At This Section You Can Search For Games by multiple filters
        </p>
        <div className="relative my-6">
          <input
            className="w-full rounded-lg  bg-[#181724] pl-11 py-4 text-white focus:outline-none"
            placeholder="Game Name"
            type="search"
          />
          <img
            src="img/icon/search.svg"
            className="bottom-5 left-3 absolute"
            alt=""
          />
        </div>
        <div className="flex flex-row flex-wrap lg:!space-x-3 gap-1 lg:!gap-0 justify-between items-center">
          {btnFilter.map((x) => (
            <BtnFilter key={x} text={x}></BtnFilter>
          ))}
        </div>
        <div className="my-10 flex lg:!space-y-0 space-y-3 flex-row lg:!flex-nowrap flex-wrap items-center justify-evenly">
          <label className="text-white text-lg lg:!mr-2 mr-5" htmlFor="#pltfrm">
            Platform
          </label>
          <select
            className="lg:!w-2/5 py-2 px-2 rounded-lg font-thin text-gray-300 bg-[#181724]"
            name=""
            id="pltfrm"
          >
            <option value="">All</option>
            <option value="">......</option>
            <option value="">......</option>
            <option value="">......</option>
          </select>
          <label className="text-white text-lg lg:!ml-14 mr-7  lg:!mr-2" htmlFor="#Pblshr">
            Publisher
          </label>
          <select
            className="lg:!w-2/5 py-2 px-2 rounded-lg font-thin text-gray-300 bg-[#181724]"
            name=""
            id="Pblshr"
          >
            <option value="">All</option>
            <option value="">......</option>
            <option value="">......</option>
            <option value="">......</option>
          </select>
          <label className="text-white text-lg lg:!ml-14 mr-7 lg:!mr-2" htmlFor="#Plyrs">
            Players
          </label>
          <select
            className="lg:!w-2/5 py-2 px-2 rounded-lg font-thin text-gray-300 bg-[#181724]"
            name=""
            id="Plyrs"
          >
            <option value="">All</option>
            <option value="">......</option>
            <option value="">......</option>
            <option value="">......</option>
          </select>
        </div>
        <div className="my-10 flex flex-row lg:!flex-nowrap flex-wrap items-center">
          <label className="text-white text-lg lg:!mx-7" htmlFor="#pltfrm">
            Release Year{" "}
            <span className="text-gray-500 text-sm text-center mr-1">
              (2000-2024)
            </span>
          </label>
          <input
            type="range"
            step={1}
            onChange={chengYears}
            value={year}
            min={2000}
            className="lg:!w-[240px] w-[190px] mb-5 mt-2"
            max={2024}
          />
          <h1 className="text-white text-xs lg:!text-xl text-center ml-1">{year}</h1>
          <label className="text-white text-lg lg:!mx-7" htmlFor="#Pblshr">
            Rating
            <span className="text-gray-500 text-sm text-center ml-1">
              (0-100)
            </span>
          </label>
          <input
            type="range"
            step={1}
            onChange={chengRanting}
            value={rating}
            min={0}
            className="lg:!w-[240px] w-[190px] mb-5 mt-2"
            max={100}
          />
          <h1 className="text-white text-xs lg:!text-xl text-center ml-1">{rating}</h1>
          <label htmlFor="#online" className="lg:!mx-5 mx-2 text-sm lg:!text-lg text-white">
            Online
          </label>
          <button
            id="online"
            onClick={disable}
            className={`group relative cursor-pointer p-1 w-[55px] h-[27px] border-4  hover:shadow-orange-600 border-orange-600 ${
              btnOnline ? "online" : "unOnline"
            } rounded-full`}
          >
            <div
              className={`absolute my-auto top-0 bottom-0 left-1 w-[15px] rounded-full bg-[#FF5733] h-[15px] transition-all `}
            ></div>
          </button>
          <label htmlFor="#free" className="lg:!mx-5 mx-2 text-sm lg:!text-lg text-white">
            Free
          </label>
          <button
            id="free"
            onClick={disable1}
            className={`relative cursor-pointer p-1 w-[55px] h-[27px] border-4  hover:shadow-orange-600 border-orange-600  rounded-full ${
              btnFree ? "free" : "unFree"
            }`}
          >
            <div
              className={`absolute my-auto top-0 bottom-0 left-1 w-[15px] rounded-full bg-[#FF5733] h-[15px] transition-all`}
            ></div>
          </button>
        </div>
        <button className=" w-full mx-auto hover:bg-orange-700 duration-150 text-white text-center py-2 px-2 lg:!mt-3 bg-[#FF5733] rounded-2xl">
          Search For Games
        </button>
      </form>
      <div className="flex lg:!mx-0 space-y-3 lg:!space-y-0 flex-col flex-wrap gap-1 lg:!flex-row lg:!space-x-5 mt-12">
        {gameBox.map((x) => (
          <BoxSearch key={x.id} {...x}></BoxSearch>
        ))}
        <button className="text-orange-500 text-lg text-center px-8 border lg:!my-5 focus:text-white focus:bg-[#ff5733] duration-150 border-orange-500 rounded-2xl py-1 mx-auto">
          View All <span className="text-lg lg:!text-2xl">&gt;</span>
        </button>
      </div>
    </div>
  );
}
