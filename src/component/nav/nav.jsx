import React from "react";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between p-4 px-5 backdrop-blur-md fixed z-40 w-full top-0 items-center">
      <div className="flex flex-row z-40 basis-3/12 space-x-3 items-center">
            <img
            src="img/icon/logo.png"
            className=""
            alt=""
          />
        <button className="group relative w-[50px]">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-[320px] p-3 px-10 text-lg text-white duration-500 bg-black rounded-full"
            />
            <img src="img//icon/search.svg" className="absolute left-3 top-1/2 my-auto bottom-1/2" alt="" />
        </button>
      </div>
      <div className="z-40 basis-3/6 mx-auto text-center">
        <ul className="flex flex-row justify-center space-x-5 items-center">
          <li className="text-white border-l-white border-r-white border-r border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            Home
          </li>
          <li className="text-white border-l-white border-r-white border-r border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            News
          </li>
          <li className="text-white border-l-white border-r-white border-r border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            Store
          </li>
          <li className="text-white border-l-white border-r-white border-r border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            Review
          </li>
          <li className="text-white border-r border-l-white border-r-white border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            Guides
          </li>
          <li className="text-white border-r border-l-white border-r-white border-l px-6 hover:duration-500 rounded-full  border-opacity-0 hover:border-opacity-100 border-red-500 text-lg cursor-pointer text-center hover:text-[#FF5733] duration-150">
            About Us
          </li>
        </ul>
      </div>
      <div className="flex z-40 flex-row space-x-5 basis-1/6  justify-center items-center">
        <button className="text-white px-7 py-1 duration-150 hover:-translate-y-1 bg-[#FF5733] border border-orange-600 rounded-xl">
          Sign Up
        </button>
        <button className="text-[#FF5733] duration-150 hover:-translate-y-1 bg-transparent px-7 py-1 border border-orange-600 rounded-xl">
          Log In
        </button>
      </div>
    </nav>
  );
}
