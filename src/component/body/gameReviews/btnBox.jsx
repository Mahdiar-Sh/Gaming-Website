import React from 'react'

export default function BtnBox(props) {
  return (
    <button className="text-center py-1 px-3 text-[10px] rounded-xl text-gray-300 bg-[#181724]">
    {props.title}
  </button>
  )
}
