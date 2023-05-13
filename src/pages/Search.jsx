import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSongs } from '../redux/SongDetailSlice'

const Search = () => {
    const dispatch = useDispatch()
    const searchData = useSelector((state) => state.Search.data)

  return (
    <section className="flex flex-col justify-start items-start w-full md:min-h-screen pt-24 px-4 border-l-2 border-[#2a2a2a]">
     {/* Songs Result */}
     <div>
     <h2 className='text-2xl text-left py-4'>Songs</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mb-[50px]'>
      {searchData ? searchData.data.songs.results.map((s) => {
        return(
          <Link to='/songdetails' onClick={() => dispatch(fetchSongs(s.url))} className='flex flex-col justify-center items-center' >
            <img className='h-[200px]' src={s.image[2].link} alt={s.name} />
            <span>{s.title}</span>
          </Link>
        )
      }) : 'Nothing to show' }
      </div>
     </div>
     {/* Albums Result */}
     <div>
     <h2 className='text-2xl text-left py-4'>Albums</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mb-[50px]'>
      {searchData ? searchData.data.albums.results.map((s) => {
        return(
          <Link to='/songdetails' onClick={() => dispatch(fetchSongs(s.url))} className='flex flex-col justify-center items-center' >
            <img className='h-[200px]' src={s.image[2].link} alt={s.name} />
            <span>{s.title}</span>
          </Link>
        )
      }) : 'Nothing to show' }
      </div>
     </div>
     {/* Playlist Result */}
     <div>
     <h2 className='text-2xl text-left py-4'>Playlists</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mb-[50px]'>
      {searchData ? searchData.data.playlists.results.map((s) => {
        return(
          <Link to='/songdetails' onClick={() => dispatch(fetchSongs(s.url))} className='flex flex-col justify-center items-center' >
            <img className='h-[200px]' src={s.image[2].link} alt={s.name} />
            <span>{s.title}</span>
          </Link>
        )
      }) : 'Nothing to show' }
      </div>
     </div>
    </section>
  )
}

export default Search