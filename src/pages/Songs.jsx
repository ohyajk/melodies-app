import React from 'react'
import { fetchData } from '../redux/SongDetailSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const Songs = () => {
  const dispatch = useDispatch()
  const songs = useSelector(state => state.Songs.data)
  console.log(songs)

  return (
    <section className="flex flex-col justify-start items-start w-full md:min-h-screen pt-24 px-4 border-l-2 border-[#2a2a2a]">
     <h1 className='text-2xl text-left py-4'>Trending Songs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mb-[50px]'>
      {songs ? songs.data.songs.map((s) => {
        return(
          <Link to='/songdetails' onClick={() => dispatch(fetchData(s.url))} className='flex flex-col justify-center items-center' >
            <img className='h-[200px]' src={s.image[2].link} alt={s.name} />
            {s.name}
          </Link>
        )
      }) : 'Nothing to show' }
      </div>
    </section>
  )
}

export default Songs