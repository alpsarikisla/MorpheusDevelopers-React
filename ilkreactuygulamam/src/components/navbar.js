import React from 'react'

export default function Navbar() {
  return (
    <div className='menubar'>
        <a href='#'>Anasayfa</a>
        <a href='#'>Hakkımızda</a>
        <a href='#'>Referanslar</a>
        <a href='#'>İletişim</a>
    </div>
  )
}

export const BreadCrumb=()=>{
    return(
        <div className='breadcrumb'>
            <ul>
                <li><a href="#">Anasayfa</a></li>
                <li>&#62;</li>
                <li>Profil</li>
            </ul>
        </div>
    )
}
