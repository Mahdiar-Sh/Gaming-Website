import React from 'react'

export default function ImageBoxMonth(props) {
    function changeHandler(id){
        props.change(id)
    }
  return ( 
    <div>
      {props.addres === "img/85717fcc536b7908d14f976ff4ee3dd659277956-480p.mp4" ? (<video onClick={() =>  changeHandler(props.id)} src={props.addres} className='lg:!w-[150px] w-[100px] h-[50px] lg:!h-[90px] mx-auto cursor-pointer rounded-lg hover:scale-110 duration-150' poster='img/black/black-myth-wukong-pc-game-steam-europe-and-us-and-canada-cover.jpg'></video>) : 
      (<img onClick={() =>  changeHandler(props.id)} className="lg:!w-[150px] w-[100px] h-[50px] lg:!h-[90px] mx-auto cursor-pointer rounded-lg hover:scale-110 duration-150" src={props.addres} alt="" />)}
          </div> 

  )
}
