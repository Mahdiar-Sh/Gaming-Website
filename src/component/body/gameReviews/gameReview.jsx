import React, { useState } from "react";
import ViewAll from "../../helper/viewAll.jsx";
import GameBox from "./gameBoxReview.jsx";
export default function GameReview() {
  const [box] = useState([
    {
      id: 1,
      name: "Ghost Of Tsushima",
      year: 2020,
      text: 'Step into the war-torn world of Feudal Japan, where honor and sacrifice are tested in the fires of conflict. "Ghost of Tsushima" follows Jin Sakai, one of the last remaining samurai, as he defends his homeland from the Mongol invasion. The game offers an immersive open-world filled with stunning landscapes and ...',
      ranting: 81,
      date: "Sertamber 8, 2024",
      view: 1200,
      comment: 112,
      star: 8.3,
      addres: "img/Ghost Of Tsushima.png",
      btn: ["Action", "RPG", "Samurai", "Advanture"],
    },
    {
      id: 2,
      name: "Cyberpunk",
      year: 2020,
      text: "Step into a dark, gritty, and dystopian world where high-tech meets low-life. In Cyberpunk 2077, you play as V, a mercenary navigating the vibrant and dangerous Night City, where choices shape your destiny. The game blends first-person shooter mechanics with RPG elements, offering deep customization, immersive ...",
      ranting: 86,
      date: "Sertamber 7, 2024",
      view: 1000,
      comment: 86,
      star: 8.2,
      addres: "img/Cyberpunk_2077.png",
      btn: ["Action", "RPG", "Shooting"],
    },
    {
      id: 3,
      name: "Forza Horizon 5",
      year: 2021,
      text: "Forza Horizon 5 takes players to the stunning landscapes of Mexico, delivering the ultimate open-world racing experience. With a vast map full of diverse environments, the game excels in both visual splendor and gameplay depth. Whether you’re speeding through deserts, rainforests, or vibrant city streets, ...",
      ranting: 92,
      date: "Sertamber 4, 2024",
      view: 2100,
      comment: 96,
      star: 8.3,
      addres: "img/forzahorizon5.png",
      btn: ["Sports", "Cars", "Racing", "Drifting"],
    },
    {
      id: 4,
      name: "COD: Modern Warfare II",
      year: 2022,
      text: 'Call of Duty: Black Ops 6 returns with an intense, fast-paced storyline, diving deeper into the shadowy world of covert operations. Boasting a gripping narrative, this installment introduces "Omnimovement," allowing unprecedented flexibility in how players navigate the battlefield. From sliding and sprinting in any direction ...',
      ranting: 75,
      date: "Sertamber 1, 2024",
      view: 2600,
      comment: 248,
      star: 7.6,
      addres: "img/COD MW2.png",
      btn: ["Action", "RPG", "Battle", "Shooting", "History"],
    },
  ]);
  return (
    <div className="text-white lg:!my-28">
      <ViewAll text={"Game Reviews"}></ViewAll>
      <div className="flex flex-col mx-12 lg:!flex-row gap-y-3 lg:!gap-5 justify-center items-center my-10 flex-wrap">
        {box.map((x) => (
          <GameBox key={x.id} {...x}></GameBox>
        ))}
      </div>
    </div>
  );
}
