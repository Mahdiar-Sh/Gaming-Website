import React, { useState } from "react";
import GameBoxEx from "./gamingExBox.jsx";
export default function GamingEx() {
  const [box] = useState([
    {
      id: 1,
      titr: "Access",
      titrBold: "Exclusive Games",
      text: "Get early access to new releases and hidden gems, only for registered members. Be the first to play!",
    },
    {
      id: 2,
      titr: "Track",
      titrBold: "Stats & Achievements",
      text: "Monitor gameplay stats, track achievements, and share your progress with fellow gamers easily",
    },
    {
      id: 3,
      titr: "Join Our",
      titrBold: "Community",
      text: "Connect with a passionate community of gamers. Share tips, strategies, and gaming experiences",
    },
    {
      id: 4,
      titr: "Exclusive",
      titrBold: "Discounts & Offers",
      text: "Enjoy member-only discounts on top-rated games, DLCs, and in-game items. Save on your favorites!",
    },
  ]);
  return (
    <div className="flex flex-row space-x-10 items-center justify-center my-24">
      <div className="basis-1/2">
        <h1 className="text-white text-2xl font-bold mb-3">
          Unlock the Ultimate
          <span className="text-[#FF5733]"> Gaming Experience</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Sign up now to dive into exclusive content, track your progress, and
          connect with a global community of gamers. Don’t miss out on special
          offers made just for you!
        </p>
        <div className="flex my-5 justify-center flex-row flex-wrap gap-y-6 gap-x-5">
          {box.map((x) => (
            <GameBoxEx {...x}></GameBoxEx>
          ))}
        </div>
      </div>
      <div className="basis-1/2">
        <form className="bg-[#181724] px-5 py-3 rounded-lg">
          <h1 className="text-center space-x-5">
            <button  className="text-white text-2xl">Sign Up</button>
            <button  className="text-white text-2xl">Log In</button>
          </h1>
          <h1 className="text-white text-lg my-2">Name</h1>
          <input type="text" className="text-white py-2 px-6 outline-none bg-transparent placeholder:text-xs border-2 border-white rounded-lg w-full" placeholder="Enter Your Name" />
          <h1 className="text-white text-lg my-2">E-Mail</h1>
          <input type="text" className="text-white py-2 px-6 outline-none bg-transparent placeholder:text-xs border-2 border-white rounded-lg w-full" placeholder="Enter Your Email" />
          <button className="w-full p-2 bg-[#FF5733] rounded-3xl text-center font-bold text-white text-lg my-3">Sign Up</button>
          <div className="w-full h-[1px] relative rounded-3xl z-10 text-center my-2 bg-gray-300">
            <h1 className="absolute text-white -top-[11px] z-20 px-1 bg-[#181724] -translate-x-1/2 left-1/2">Or</h1>
          </div>
          <button className="w-full py-1 border border-white rounded-3xl text-center text-white text-lg my-3">Sign Up With Google</button>
        </form>
      </div>
    </div>
  );
}
