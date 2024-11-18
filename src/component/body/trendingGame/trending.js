import React, { useState } from "react";
import "./trending.css";
import ViewAll from "../../helper/viewAll.js";
import GameBox from "./trendingGameBox.js";
import GameOfTheMonth from "../gameOfTheMonth/gameMonth.js";
import GameReview from "../gameReviews/gameReview.js";
import ComingGames from "../upComingGame/comingGame.js";
import GameFilter from "../gameByFilter/gameFilter.js";
import BlogPost from '../blogPost/blogPost.js';
import GamingEx from "../gamingEx/gamingEx.js"
export default function Trending() {
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
      id: 5,
      name: "Spider-Man 2",
      date: 2022,
      rating: 85,
      price: 100,
      off: 5,
      totalPrice: 1,
      addres: "img/marvels spide rman.png",
    },
  ]);
  return (
    <div id="bg-YOU" className="py-16 px-24">
      <ViewAll text={"Trending Game"}></ViewAll>
      <div className="flex flex-row space-x-5 mt-12">
        {gameBox.map((x) => (
          <GameBox key={x.id} {...x}></GameBox>
        ))}
      </div>
      <GameOfTheMonth></GameOfTheMonth>
      <GameReview></GameReview>
      <ComingGames></ComingGames>
      <GameFilter></GameFilter>
      <BlogPost></BlogPost>
      <GamingEx></GamingEx>
    </div>
  );
}
