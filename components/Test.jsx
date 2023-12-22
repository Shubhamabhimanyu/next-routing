"use client"
import React from 'react'

const test=(props) =>{
  const rows = [];
  const element="<img></img>"
for (let i = 0; i < props.xyz; i++) {
    rows.push(element);
}

  return (
    <div>

    {rows}
    </div>
  )
}


export default test