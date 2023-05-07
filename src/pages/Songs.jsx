import React, { useEffect, useState } from 'react'
import { fetchData } from '../redux/SongDetailSlice'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

const Songs = () => {
  const dispatch = useDispatch()
  const [songs, setSongs] = useState('')

  useEffect(() => {
    getSongs()
  },[])

 const getSongs = async() => {
  const res = await fetch('https://saavn.me/playlists?id=1070105513')
  const data = await res.json()
  setSongs(data.data.songs)
}
console.log(songs)

  return (
    <section className="flex flex-col justify-start items-start w-full md:h-full p-4 ">
     <h1 className='text-2xl text-left py-4'>Trending Songs</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full'>
      {songs ? songs?.map((s) => {
        return(
          <Link to='/songdetails' onClick={() => dispatch(fetchData(s.url))} >
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