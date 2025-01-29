import React from "react";

export default function GameBoxCategori(props) {
  return (
    <div className= {`${props.status} group z-10 relative duration-500 hover:shadow-[#c94830] shadow-sm  rounded-lg`}>
        <img
          src={props.addres}
          className="w-full h-[200px] mx-auto z-10  rounded-lg"
          alt=""
        />
        <div className="w-full h-full absolute bottom-0 opacity-40 z-10  bg-black"></div>
        <div className="absolute  bottom-0 duration-300 h-full w-full opacity-0 group-hover:opacity-100 z-10  bg-gradient-to-t from-black 50%"></div>
       <div className="flex flex-row">
       <h1 className="text-white text-xl group-hover:-translate-y-2 duration-300  absolute bottom-6 z-20 left-4 font-bold">{props.title}</h1>
       <h1 className="text-[#c94830] text-md cursor-pointer hover:text-orange-800 opacity-0 group-hover:-translate-y-2 group-hover:opacity-100 duration-300 z-20  absolute bottom-4 right-4">View All &gt;</h1>
       <h1 className="text-gray-400  text-sm group hover:-translate-y-2 duration-300  absolute bottom-0 left-4 opacity-0 group-hover:-translate-y-2 z-20 group-hover:opacity-100">{props.text}</h1>
       </div>
    </div>
  );
}
