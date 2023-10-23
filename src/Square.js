import { useState } from 'react'

const Square = ({ bgColor }) => {

  return (
    <div 
        className="square" style={{backgroundColor: bgColor}}
    >      
        <p>{bgColor ? bgColor : "Empty Value"}</p>
    </div>
  )
}

Square.defaultProps = {
    bgColor: "Empty Color Value"
}

export default Square