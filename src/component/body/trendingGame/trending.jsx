import React, { useState } from "react";
import "./trending.css";
import ViewAll from "../../helper/viewAll.jsx";
import GameBox from "./trendingGameBox.jsx";
import GameOfTheMonth from "../gameOfTheMonth/gameMonth.jsx";
import GameReview from "../gameReviews/gameReview.jsx";
import ComingGames from "../upComingGame/comingGame.jsx";
import GameFilter from "../gameByFilter/gameFilter.jsx";
import BlogPost from "../blogPost/blogPost.jsx";
import GamingEx from "../gamingEx/gamingEx.jsx";
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
    <div id="bg-YOU" className="lg:py-16 py-5 lg:px-24">
      <ViewAll text={"Trending Game"}></ViewAll>
      <div className="flex flex-col lg:!flex-row space-x-0 lg:!mx-0 mx-3 lg:!space-y-0 space-y-3 lg:!space-x-5 mt-5">
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
