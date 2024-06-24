import React from 'react'
import "./title.css"

const title = ({name,subtitle}) => {
  return (
    <div className='title'>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
    </div>
  )
}

export default title