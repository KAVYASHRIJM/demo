import React, { useState } from 'react'
import Img from './muruga.jpg'
import shiv from './shivam.jpg'
const Statehandle = () => {
    const [image,setImage]=useState(Img)
    const changer=function(){
        setImage(shiv)
    }
  return (
    <div>
        <img src={image} alt="" onMouseEnter={changer} />
    </div>
  )
}
export default Statehandle