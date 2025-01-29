import React, { useState } from "react";
import GameBoxCategori from "./gameBoxCategori.jsx";
import "./gameCategori.css";
import ViewAll from "../../helper/viewAll.jsx"

export default function GameCategori() {
  const [gameCat] = useState([
    {
      id: 1,
      status: "col-span-2",
      title: "Sports & Racing",
      addres: "img/Category Big1.png",
      text: "Experience The Real-World Sports And High-Speed Racing Challenges",
    },
    {
      id: 4,
      status: "col-span-1",
      title: "Survival",
      addres: "img/Category Small2.png",
      text: "",
    },
    {
      id: 3,
      status: "col-span-1",
      title: "Strategy",
      addres: "img/Category Small1.png",
      text: "",
    },
    {
      id: 5,
      status: "col-span-1",
      title: "RPG",
      addres: "img/Category Small3.png",
      text: "",
    },
    {
      id: 6,
      status: "col-span-1",
      title: "Adventure",
      addres: "img/Category Small4.png",
      text: "",
    },
    {
      id: 2,
      status: "col-span-2",
      title: "Sports & Racing",
      addres: "img/Category Big2.png",
      text: "High-Speed Combat And Thrilling Sequences Await You In Action",
    },
  ]);
  return (
    <section id="bg-YOU" className="px-24 py-1 ">
      <ViewAll text={"Game Category"}></ViewAll>
      <div className="grid  z-10 grid-cols-4 gap-10 mt-10 justify-center mx-auto">
        {gameCat.map((x) => (
          <GameBoxCategori key={x.id} {...x}></GameBoxCategori>
        ))}
      </div>
    </section>
  );
}
