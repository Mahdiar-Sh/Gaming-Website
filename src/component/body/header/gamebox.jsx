import React from 'react'
export default function Gamebox(props) {
  function findId(id){
    props.chenge(id)
  }
  return (
    <button id='IMAGE' className='rounded-lg duration-300 focus:scale-105 border-2 border-orange-600 border-opacity-0 focus:border-opacity-100 focus:-translate-y-7  hover:-translate-y-2'>
    <img src={props.addres} onClick={() => findId(props.id)}  className='w-[153px] duration-200 cursor-pointe  h-[220px]' alt="netword error" />
    </button>
  )
}
