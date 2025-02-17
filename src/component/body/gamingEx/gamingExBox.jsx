import React from "react";
import "./box.css"
export default function GamingExBox(props) {
  return (
    <div id="box" className="bg-[#181724] lg:!w-[48%] px-2 space-y-1 py-3 rounded-lg">
      <h1 className="text-lg text-center text-white">
        {props.titr}
        <span className="text-[#FF5733]"> {props.titrBold}</span>
      </h1>
      <p className="text-sm text-gray-400 text-justify">{props.text}</p>
    </div>
  );
}
