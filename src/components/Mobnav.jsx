import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Mobnav = () => {

  const [show, setShow] = useState(false)

  return (
    <nav className=" p-2 flex md:hidden flex-col justify-center items-center gap-4">
      <i onClick={() => setShow(!show)} className="fa-solid fa-bars fa-lg absolute top-12 right-9 text-[#25a56a]"></i>
      <div className="flex justify-center items-center">
        <img className="h-12" src="/logo.png" alt="Melodies-logo" />
        <h1 className="text-xl">Melodies Music</h1>
      </div>
        {show ? <ul className="flex flex-col justify-start items-start text-left px-4 text-base gap-4">
            <Link to='/' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-house fa-lg text-[#25a56a]"></i><span className="text-[#25a56a]">Home</span></Link>
            <Link to='/songs' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-music fa-lg "></i><span className="">Songs</span></Link>
            <Link to='/albums' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-record-vinyl fa-lg "></i><span className="">Albums</span></Link>
            <Link to='/playlists'className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-list fa-lg "></i><span className="">Playlists</span></Link>
        </ul> : ''}
    </nav>
  )
}

export default Mobnav