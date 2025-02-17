import React from "react";

export default function BlogPostBox(props) {
  return (
    <div className={`${props.size}`}>
      <div className="relative group">
        <img src={props.addres} className="" alt="" />
        <div className="absolute bottom-0 opacity-30 w-full h-full bg-black"></div>
        <div className="absolute  bottom-0 duration-300 h-full w-full opacity-0 group-hover:opacity-100 z-0 rounded-lg  bg-gradient-to-t from-black 50%"></div>
        <div className="absolute bottom-0 left-3 lg:!space-y-0 space-y-6">
          <h1 className="group-hover:-translate-y-2 translate-y-7 duration-500 text-xs lg:!text-lg lg:!mx-4 text-gray-300">
            {props.text}
          </h1>
          <div className="justify-between mx-2 lg:!group-hover:-translate-y-2 items-center opacity-100 lg:!opacity-0 group-hover:lg:!opacity-100 duration-200 text-white flex flex-row">
            <div className="flex flex-row justify-between space-x-2 lg:!space-x-5 items-center">
              <h1 className=" flex flex-row items-center text-[10px]">
                <span>{props.jener}</span>
              </h1>
              <h1 className="flex flex-row text-[10px] items-center">
                <img
                  src="img/icon/uiw_date.svg"
                  className="inline scale-50"
                  alt=""
                />
                <span>{props.year}</span>
              </h1>
            </div>
            <div>
              <h1 className="lg:!text-lg text-[10px] text-[#FF5733]">
                View All <span className="text-xs lg:!text-2xl">&rsaquo;</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
