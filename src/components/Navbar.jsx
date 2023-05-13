import { useState } from "react"
import { useDispatch } from "react-redux"
import {fetchSongQuery} from "../redux/Search"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSongQuery(query))
    navigate('/search')
  }

  return (
    <nav className="fixed gridd w-full border-b-2 border-myBorder bg-bgbg">
      {/* Logo */}
      <div className="flex justify-center items-center w-[250px] py-2">
        <img className="h-16" src="/logo.png" alt="Melodies-logo" />
        <h1 className="text-xl">Melodies Music</h1>
      </div>
      {/* Search Func */}
      <div className="flex flex-grow justify-center border-l-2 border-myBorder">
      <form onSubmit={(e) => handleSubmit(e)}  className="flex justify-center items-center gap-2">
        <input onChange={(e) => setQuery(e.target.value)} type="text" className="border border-white/40 active:border-white focus:border-white outline-none px-2 h-[40px] md:w-[400px] lg:w-[600px] rounded-sm" required />
        <button type="submit" className="bg-myGreen w-[200px] px-2 h-[40px] rounded-sm hover:bg-myGreen/50 cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i><span className="pl-2 text-lg">Search</span></button>
        
      </form>
      </div>
    </nav>

  )
}

export default Navbar