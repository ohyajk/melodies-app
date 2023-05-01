import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Songs from "./pages/Songs"
import Albums from "./pages/Albums"
import Playlists from "./pages/Playlists"
import SongDetail from "./pages/SongDetail"

function App() {

  return (
    <main className="mainbox box-border flex items-start justify-start m-4 bg-[#16151a] rounded-3xl" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/songs" element={<Songs/>} />
        <Route path="/albums" element={<Albums/>} />
        <Route path="/playlists" element={<Playlists/>} />
        <Route path="/songdetails" element={<SongDetail/>} />
      </Routes>
    </main>
  )
}

export default App
