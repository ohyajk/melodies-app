import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchQuery } from "../api/fetcher"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [showHamMenu, setShowHamMenu] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchQuery(query))
    navigate('/search')
  }

  return (
    <nav className="fixed gridd gridd2  w-full border-b-2 border-myBorder px-2 md:px-0 bg-bgbg z-10">
      {/* Logo */}
      <div className="flex justify-center items-center md:w-[250px] py-2">
        <img className="h-12 md:h-16" src="/logo.png" alt="Melodies-logo" />
        <h1 className="text-xl hidden md:block">Melodies Music</h1>
      </div>
      {/* Search Func */}
      <div className="flex flex-grow justify-center md:border-l-2 border-myBorder">
      <form onSubmit={(e) => handleSubmit(e)}  className="flex justify-center items-center gap-2">
        <input onChange={(e) => setQuery(e.target.value)} type="text" className="border border-white/40 active:border-white focus:border-white outline-none px-2 h-[30px] md:h-[40px] w-[150px] md:w-[400px] lg:w-[600px] rounded-sm" required />
        <button type="submit" className="flex justify-center items-center bg-myGreen md:w-[200px] px-2 h-[30px] md:h-[40px] rounded-sm hover:bg-myGreen/50 cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i><span className="pl-2 text-lg hidden md:block">Search</span></button>  
      </form>
      </div>
      {/* Ham */}
      <div className="md:hidden">
      <i onClick={() => setShowHamMenu(!showHamMenu)} className="fa-sharp fa-solid fa-bars fa-lg"></i>
      </div>
      {/* Ham menu */}
      {showHamMenu == true ? <div className='bg-bgbg backdrop-blur-sm h-full w-full top-0 bottom-0 right-0 left-0 fixed flex flex-col justify-start items-center md:hidden'>
        <ul className="flex flex-col justify-start items-start text-left pt-24 text-lg gap-8">
            <NavLink onClick={() => setShowHamMenu(!showHamMenu)} to='/' className="flex justify-start items-center gap-4 active:text-myGreen cursor-pointer"><i className="fa-solid fa-house fa-lg "></i><span>Home</span></NavLink>
            <NavLink onClick={() => setShowHamMenu(!showHamMenu)} to='/songs' className="flex justify-start items-center gap-4 active:text-myGreen cursor-pointer"><i className="fa-solid fa-music fa-lg "></i><span>Songs</span></NavLink>
            <NavLink onClick={() => setShowHamMenu(!showHamMenu)} to='/albums' className="flex justify-start items-center gap-4 active:text-myGreen cursor-pointer"><i className="fa-solid fa-record-vinyl fa-lg "></i><span>Albums</span></NavLink>
            <NavLink onClick={() => setShowHamMenu(!showHamMenu)} to='/playlists' className="flex justify-start items-center gap-4 active:text-myGreen cursor-pointer"><i className="fa-solid fa-list fa-lg "></i><span>Playlists</span></NavLink>
        </ul>
        <i onClick={() => setShowHamMenu(!showHamMenu)} className="fa-solid fa-xmark fa-xl absolute top-8 right-6"></i>
    </div> : ''}
    </nav>

  )
}

export default Navbar