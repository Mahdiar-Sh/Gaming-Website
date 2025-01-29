import React from 'react'

export default function BlogPostBox(props) {
  return (
    <div className={props.size}>
    <div className="relative group">
      <img src={props.addres} className='' alt="" />
      <div className="absolute bottom-0 opacity-30 w-full h-full bg-black"></div>
      <div className="absolute bottom-0 bg-gradient-to-t bg-opacity-10 from-black to-60% opacity-0 group-hover:opacity-100 duration-200  w-full h-full bg-black"></div>
      <div className="absolute bottom-0 left-3">
        <h1 className="group-hover:-translate-y-2 translate-y-7 duration-500 text-lg mx-4 text-white">{props.text}</h1>
      <div className="justify-between mx-2 group-hover:-translate-y-2 items-center opacity-0 group-hover:opacity-100 duration-200 text-white flex flex-row">
        <div className="flex flex-row justify-between space-x-5 items-center">
          <h1 className=" flex flex-row items-center">
            <img src="img/icon/RAM-icon.svg" className="inline mr-1" alt="" />
            <span>{props.jener}</span>
          </h1>
          <h1 className=" flex flex-row items-center">
            <img src="img/icon/uiw_date.svg" className="inline scale-50" alt="" />
            <span>{props.year}</span>
          </h1>
        </div>
        <div>
          <h1 className="text-lg text-[#FF5733]">
            View All <span className="text-2xl">&rsaquo;</span>
          </h1>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}
