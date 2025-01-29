import React from 'react'

export default function ViewAll(props) {
  return (
    <div className="flex flex-row my-12 justify-between items-center">
    <div className="flex flex-row justify-center items-center space-x-24">
      <h1 className="text-white text-3xl font-bold">{props.text}</h1>
      <h1 className="text-[#c94830] text-2xl cursor-pointer hover:text-orange-800 ">
        View All &gt;
      </h1>
    </div>
    <div>
      <div className="space-x-3">
        <button className="border focus:border-white border-gray-200 duration-200 p-3 rounded-lg">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 5.9H1M1 5.9L6.4 0.5M1 5.9L6.4 11.3"
              stroke="#979797"
            />
          </svg>
        </button>
        <button className="border p-3 active focus:border-white border-gray-200 duration-200 rounded-lg">
          <svg
            width="13"
            height="12"
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.9H12M12 5.9L6.6 0.5M12 5.9L6.6 11.3"
              stroke="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  )
}
