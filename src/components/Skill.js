import React from 'react'

/**
* @author
* @function Skill
**/

export const Skill = ({name, percent}) => {
  return(
    <div className="skill">
    <span>
      <span>{name}</span>
      <span>{percent}%</span>
    </span>
    <progress value={percent} max="100" />
  </div>
   )

 }