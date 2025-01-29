import React , {useState}from 'react'
import ViewAll from "../../helper/viewAll.jsx";
import GameBox from './comingGameBox.jsx';
export default function ComingGame() {
    const [gameBox] = useState([
        {
          id: 1,
          name: "the Witcher 4",
          date: 2025,
          addres: "img/witcher4.png",
        },
        {
          id: 2,
          name: "FC25",
          date: 2020,
          addres: "img/ea_sports_fc_25.png",
        },
        {
          id: 3,
          name: "Star Wars Outlaws",
          date: 2018,
          addres: "img/Star_Wars_Outlaws_2023.png",
        },
        {
          id: 4,
          name: "Mortal Combat 11",
          date: 2022,
          addres: "img/Mortal Kombat 11.png",
        },
        {
          id: 5,
          name: "Spider-Man 2",
          date: 2022,
          addres: "img/marvels spide rman.png",
        },
      ]);
  return (
    <div className='my-10'>
      <ViewAll text={"Up Coming Games"}></ViewAll>
      <div className="flex flex-row space-x-5 mt-12">
      {gameBox.map( x => 
        <GameBox key={x.id} {...x}></GameBox>
      )}
      </div>
    </div>
  )
}
