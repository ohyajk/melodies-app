import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-[300px] h-full p-2 flex flex-col justify-start items-start gap-4 border-r border-white/50">
      <div className="flex justify-center items-center">
        <img className="h-16" src="/logo.png" alt="Melodies-logo" />
        <h1 className="text-xl">Melodies Music</h1>
      </div>
        <ul className="flex flex-col justify-start items-start text-left px-4 text-lg gap-4">
            <Link to='/' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-house fa-lg text-[#25a56a]"></i><span className="text-[#25a56a]">Home</span></Link>
            <Link to='/songs' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-music fa-lg "></i><span className="">Songs</span></Link>
            <Link to='/albums' className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-record-vinyl fa-lg "></i><span className="">Albums</span></Link>
            <Link to='/playlists'className="flex justify-start items-center gap-4 hover:text-[#25a56a] cursor-pointer"><i className="fa-solid fa-list fa-lg "></i><span className="">Playlists</span></Link>
        </ul>
    </nav>
  )
}

export default Navbar