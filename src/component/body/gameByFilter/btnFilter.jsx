import React from 'react'

export default function BtnFilter(props) {
  return (
    <button className="text-center py-2 hover:-translate-y-1 duration-150 rounded-3xl w-[110px] text-xs lg:!text-lg font-thin text-gray-300 bg-[#181724]">
    {props.text}
  </button>
  )
}
