import React from "react";

export default function ComingGameBox(props) {
  return (
    <div className="space-y-3 px-2 hover:border-violet-900 duration-200  cursor-pointer lg:!w-[20%] border-2 border-violet-950 p-1 rounded-lg">
      <img src={props.addres} alt="" className="mx-auto hover:scale-100 scale-95 duration-200 w-full h-64" />
      <h1 className="text-lg  text-white">{props.name}</h1>
      <div className="flex flex-row justify-between space-x-3">
        <div className="">
          <img src="img/icon/uiw_date.svg" alt="" className="inline scale-75" />
          <span className="text-white text-sm">{props.date}</span>
        </div>
        <div className="flex flex-row justify-between items-center p-2">
          <h1 className="text-white text-sm">
            Per-Order <span className="text-orange-800">&rarr;</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
