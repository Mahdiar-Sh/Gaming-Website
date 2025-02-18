import React, { useState } from "react";
import Image from "./imageBoxMonth";
export default function GameMonth() {
  const [imageBox] = useState([
    {
      id: 1,
      addres: "img/85717fcc536b7908d14f976ff4ee3dd659277956-480p.mp4",
    },
    { id: 2, addres: "img/black/2400.webp" },
    {
      id: 3,
      addres:
        "img/black/a-picture-of-the-equipment-menu-of-the-character-black-myth-wukong.avif",
    },
    { id: 4, addres: "img/black/untitled-design-1-3.avif" },
  ]);
  const [changeImage, setChangeImage] = useState(
    "img/85717fcc536b7908d14f976ff4ee3dd659277956-480p.mp4"
  );
  function changeImg(event) {
    let newImage = imageBox.filter((x) => {
      return x.id === event;
    });
    setChangeImage(newImage[0].addres);
  }
  return (
    <div className="mt-24 lg:!mx-0 mx-3">
      <h1 className="text-white text-xl lg:!text-3xl text-center my-14">
        Game Of The Month
        <hr className="w-[60%] lg:!w-[40%] mx-auto my-[5px]" />
      </h1>
      <div className="flex flex-col lg:!flex-row lg:!mx-10 justify-center  space-x-12">
        <div className="lg:!basis-1/3 text-center mx-auto">
          <h1 className="text-white text-lg lg:!text-2xl font-bold my-5">
            Black Myth Wukong
          </h1>
          <p className="text-white text-justify text-md">
            Black Myth: Wukong is an action RPG inspired by the legendary
            Chinese novel "Journey to the West." The game takes players on an
            epic journey as the Monkey King, Wukong, battling through
            mythological creatures and mastering magical abilities. Featuring
            stunning visuals, challenging combat, and an immersive world, Black
            Myth: Wukong aims to set a new standard for action RPGs.
          </p>
          <div className="flex flex-row gap-y-10 my-8 flex-wrap justify-between items-center">
            <div className=" basis-1/2">
              <img
                src="img/icon/simple-icons_metacritic.svg"
                alt=""
                className="inline mr-2"
              />
              <span className="text-white block mt-1 lg:!mt-0 lg:!inline">
                {" "}
                <span className="text-yellow-500 text-xl font-bold">93</span> /
                100
              </span>
            </div>
            <div className=" text-center basis-1/2">
              <h1 className="text-white text-lg lg:!text-xl">Genre :</h1>
              <p className="text-gray-400 text-sm">Action RPG Advanture</p>
            </div>
            <div className="basis-1/2">
              <img src="img/icon/uiw_date.svg" alt="" className="inline mr-2" />
              <span className="text-white block mt-1 lg:!mt-0 lg:!inline text-sm">
                {" "}
                May 19 , 2025
              </span>
            </div>
            <div className=" text-center basis-1/2">
              <h1 className="text-white text-lg text-center lg:!text-xl">
                Available for :
              </h1>
              <p className="text-gray-400 text-center text-sm">
                Pc - Ps 4 - Xbox Series X & S
              </p>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-1 my-5 justify-center items-center">
            <button className="w-[49%] p-1 hover:border-gray-400 hover:text-gray-400 duration-150 text-gray-500 text-md rounded-lg border-2 border-gray-500">
              Pc
            </button>
            <button className="w-[49%] p-1 hover:border-gray-400 hover:text-gray-400 duration-150 text-gray-500 text-md rounded-lg border-2 border-gray-500">
              Ps 4
            </button>
            <button className="w-[49%] p-1 hover:border-gray-400 hover:text-gray-400 duration-150 text-gray-500 text-md rounded-lg border-2 border-gray-500">
              Xbos series X
            </button>
            <button className="w-[49%] p-1 hover:border-gray-400 hover:text-gray-400 duration-150 text-gray-500 text-md rounded-lg border-2 border-gray-500">
              Xbox Series S
            </button>
          </div>
          <div className="flex justify-center flex-row">
            <button className=" mx-3 border hover:shadow-sm hover:shadow-[#c94830] border-[#c94830] w-[50%] rounded-2xl py-2 bg-[#c94830] text-white font-bold duration-200 hover:-translate-y-1 cursor-pointer">
              Sign Up
            </button>
            <button className=" mx-3 border border-[#c94830] w-[50%] rounded-2xl py-2 text-[#c94830] duration-200 cursor-pointer hover:-translate-y-1 font-bold  focus:bg-[#c94830]">
              LogIn
            </button>
          </div>
        </div>
        <div className="lg:!basis-2/3 lg:!my-0 mt-8">
          <h1 className="text-white text-center text-2xl my-5 font-bold">
            Trailer & Gallery
          </h1>
          <div className="relative mx-8 lg:!mx-0">
            {changeImage ===
            "img/85717fcc536b7908d14f976ff4ee3dd659277956-480p.mp4" ? (
              <video
                controls
                className="w-fit h-[143px] lg:!h-[400px] mx-auto my-auto rounded-lg"
                poster="img/black/black-myth-wukong-pc-game-steam-europe-and-us-and-canada-cover.jpg"
                src={changeImage}
              ></video>
            ) : (
              <img
                src={changeImage}
                className="w-full h-[143px] lg:!h-[400px] mx-auto my-auto rounded-lg"
                alt=""
              />
            )}
          </div>
          <div className="flex flex-row flex-wrap gap-3 lg:!gap-0 lg:!space-x-5 justify-center my-10 items-center">
            {imageBox.map((x) => (
              <Image change={changeImg} key={x.id} {...x}></Image>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:!flex-row lg:!mx-10 justify-center space-x-4">
        <div className="space-y-1 lg:!basis-1/3">
          <h1 className="text-white lg:!text-xl text-lg font-bold my-5">
            <span className="text-orange-700">Minimum</span> System Requirments
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">OS: </span>Windoes
            10 64-Bit Or Newer
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">CPU: </span>Intel
            Core i5-8400 / AMD 5 1600
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">Memory: </span>16GB
            RAM
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">GPU: </span>NVIDIA
            GeForce GTX 1060 (6GB) / AMD 5 1600
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">DirectX: </span>
            Version 11
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">Storage: </span>
            130GB Available Space
          </h1>
        </div>
        <div className="space-y-1 lg:!basis-1/3">
          <h1 className="text-white lg:!text-xl text-lg my-5 font-bold">
            <span className="text-orange-700">Recommended</span> System
            Requirments
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">OS: </span>Windoes
            10 64-Bit Or Newer
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">CPU: </span>Intel
            Core i7-9700 / AMD Radeon 5 5500
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">Memory: </span>16GB
            RAM
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">GPU: </span>NVIDIA
            GeForce GTX 2060 / AMD Radeon RX 5700Xt / INTEL Arc A750
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">DirectX: </span>
            Version 12
          </h1>
          <h1 className="text-lg text-gray-500">
            <span className="lg:!text-xl text-lg text-white">Storage: </span>
            130GB Available Space
          </h1>
        </div>
        <div className="lg:!basis-1/3 lg:!my-0 my-3">
          <form
            className="text-white bg-[#181724] p-2 lg:!p-5 rounded-lg"
            action=""
          >
            <p className="mt-2 mb-1 text-sm">RAM</p>
            <input
              className="w-full p-1 rounded-md px-3 bg-transparent border border-white outline-none placeholder:text-[10px]"
              placeholder="Enter Your RAM Avaliable"
              type="text"
            />
            <p className="mt-2 mb-1 text-sm">GPU</p>
            <input
              className="w-full p-1 rounded-md px-3 bg-transparent border border-white outline-none placeholder:text-[10px]"
              placeholder="Enter Your GPU State"
              type="text"
            />
            <p className="mt-2 mb-1 text-sm">CPU</p>
            <input
              className="w-full p-1 rounded-md px-3 bg-transparent border border-white outline-none placeholder:text-[10px]"
              placeholder="Enter Your CPU Detalis"
              type="text"
            />
            <button className="w-full text-white bg-orange-700 p-1 text-center text-sm my-2 rounded-2xl">
              Can Run I It ?
            </button>
            <button className="w-full text-orange-700 border border-orange-700 p-1 text-center text-sm my-1 rounded-2xl">
              Test My PC Automaticly
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
