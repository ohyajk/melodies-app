import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='hidden fixed md:flex flex-col justify-start'>
        <ul className="flex flex-col justify-start items-start text-left pl-8 pt-24 text-lg gap-5">
            <NavLink to='/' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 text-myGreen cursor-pointer" : "flex justify-start items-center gap-4 hover:text-myGreen cursor-pointer"}><i className="fa-solid fa-house fa-lg "></i><span>Home</span></NavLink>
            <NavLink to='/songs' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 text-myGreen cursor-pointer" : "flex justify-start items-center gap-4 hover:text-myGreen cursor-pointer"}><i className="fa-solid fa-music fa-lg "></i><span>Songs</span></NavLink>
            <NavLink to='/albums' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 text-myGreen cursor-pointer" : "flex justify-start items-center gap-4 hover:text-myGreen cursor-pointer"}><i className="fa-solid fa-record-vinyl fa-lg "></i><span>Albums</span></NavLink>
            <NavLink to='/playlists' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 text-myGreen cursor-pointer" : "flex justify-start items-center gap-4 hover:text-myGreen cursor-pointer"}><i className="fa-solid fa-list fa-lg "></i><span>Playlists</span></NavLink>
        </ul>
    </div>
  )
}

export default Sidebar