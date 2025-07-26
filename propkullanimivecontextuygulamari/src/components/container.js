import React from 'react'

export default function Container(props) {
  return (
    <div style={{width:"500px", height:"100px", border:"2px solid black", margin:"0px auto"}}>
      <p>{props.murtaza}</p>
      <p>{props.tarih}</p>
    </div>
  )
}
