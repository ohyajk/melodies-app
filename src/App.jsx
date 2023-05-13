import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Songs from "./pages/Songs"
import Albums from "./pages/Albums"
import Playlists from "./pages/Playlists"
import Player from "./components/Player"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Sidebar from "./components/Sidebar"
import Search from "./pages/Search"
import { fetchModules, fetchSongsPage } from "./api/fetcher"
import AlbumDetail from "./pages/AlbumDetail"
import SongDetail from "./pages/SongDetail"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSongsPage())
    dispatch(fetchModules())
  },[])

  return (
    <main className=" box-border bg-bgbg" >
      <Navbar/>
      <div className="gridd min-h-screen">
        <Sidebar/>
        <div></div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="songs" element={<Songs/>} />
        <Route path="albums" element={<Albums/>} />
        <Route path="playlists" element={<Playlists/>} />
        <Route path="songDetails" element={<SongDetail/>} />
        <Route path="albumDetails" element={<AlbumDetail/>} />
        <Route path="search" element={<Search/>} />
      </Routes>
      <Player/>
      </div>
    </main>
  )
}

export default App
