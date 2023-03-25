import React from 'react'
import './index.css'

function Photos(props) {
  return (
    <div className='photoscontainer'>
      {props.items.length && props.items.map((item, index)=>(
        <img src={item} width="300" height="400" key={index}/>
      ))}
    </div>
  )
}

export default Photos