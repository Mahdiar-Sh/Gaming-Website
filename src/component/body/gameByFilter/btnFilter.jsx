import React from 'react'

export default function BtnFilter(props) {
  return (
    <button className="text-center py-2 hover:-translate-y-1 duration-150 rounded-3xl px-7 text-lg font-thin text-gray-300 bg-[#181724]">
    {props.text}
  </button>
  )
}
