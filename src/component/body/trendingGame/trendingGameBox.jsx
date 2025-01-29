import React from "react";

export default function TrendingGameBox(props) {
  let off = true;
  if (props.off === 0) {
    off = false;
  }
  let totalPrice = props.price - (props.price * props.off) / 100;
  return (
    <div className="space-y-3 px-2 mx-auto  hover:border-violet-900 duration-200 cursor-pointer w-[19%] border-2 border-violet-950 p-1 rounded-lg">
      <img
        src={props.addres}
        alt=""
        className="mx-auto hover:scale-100 scale-95 duration-200 w-full h-64"
      />
      <h1 className="text-lg  text-white">{props.name}</h1>
      <div className="flex flex-row justify-between space-x-3">
        <div className="">
          <img
            src="img/icon/simple-icons_metacritic.svg"
            alt=""
            className="inline scale-75"
          />
          <span className="text-white text-sm">
            <span className="text-yellow-500 text-lg">{props.rating}</span>/ 100
          </span>
        </div>
        <div className="">
          <img src="img/icon/uiw_date.svg" alt="" className="inline scale-75" />
          <span className="text-white text-sm">{props.date}</span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <div className="text-white space-x-1">
          {off ? (
            <span className="text-sm line-through text-gray-500">
              {props.price}$
            </span>
          ) : (
            <span className="text-md  text-white">{props.price}$</span>
          )}
          {off && <span className="text-md">{totalPrice}$</span>}
          {off && (
            <span className="text-sm bg-orange-700 rounded-xl p-1">
              {props.off}%
            </span>
          )}
        </div>
        <h1 className="text-white text-sm hover:text-[#FF5733] duration-150">
          Buy Now <span className="text-orange-800">&rarr;</span>
        </h1>
      </div>
    </div>
  );
}
