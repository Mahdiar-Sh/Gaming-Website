import React from "react";
 import BtnBox from "./btnBox.jsx";
export default function GameBoxReview(props) {
  return (
    <div className="flex rounded-lg w-[49%] space-x-3 flex-row border border-violet-800 p-1">
      <div id="BOXC"  className="basis-1/4">
        <img src={props.addres} className=" mx-auto h-full" alt="" />
      </div>
      <div className="basis-2/4">
        <h1 className="text-xl">
          {props.name} <span className="text-gray-500">({props.year})</span>
        </h1>
        <hr className="my-1" />
        <p className="text-gray-500 text-[11.5px] text-justify">{props.text}</p>
        <div className="flex flex-row space-x-4 my-3 items-center">
          {props.btn.map( x => <BtnBox title={x}></BtnBox>)}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <img
              src="img/icon/simple-icons_metacritic.svg"
              alt=""
              className="inline scale-50"
            />
            <span className="text-white text-[13px]">
              <span className="text-yellow-500 text-[17px] font-bold">{props.ranting}</span> /
              100
            </span>
          </div>
          <div className="">
            <img
              src="img/icon/uiw_date.svg"
              alt=""
              className="inline scale-50"
            />
            <span className="text-gray-300 text-[12px]">{props.date}</span>
          </div>
        </div>
      </div>
      <div className="basis-1/4 space-y-3 my-1 text-center text-sm">
        <div>
          <img className="mx-auto" src="img/carbon_view.png" alt="" />
          <h1 className="text-white text-center">
            {props.view}+ <span>Views</span>
          </h1>
        </div>
        <div>
          <img className="mx-auto" src="img/iconamoon_comment.png" alt="" />
          <h1 className="text-white text-center">
            {props.comment} <span>Comments</span>
          </h1>
        </div>
        <div>
          <img className="mx-auto" src="img/ph_star.png" alt="" />
          <h1 className="text-white text-center">
            {props.star} / <span>10</span>
          </h1>
        </div>
        <button className="bg-[#FF5733] hover:bg-orange-400 text-center text-white py-2 px-3 rounded-xl mx-auto">
          Full Review
        </button>
      </div>
    </div>
  );
}
