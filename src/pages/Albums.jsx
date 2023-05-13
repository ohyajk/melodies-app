import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQueryAlbum } from '../api/fetcher'
import { Link } from 'react-router-dom'

const Albums = () => {
 const dispatch = useDispatch()
 const albums = useSelector(state => state.Modules.data)

console.log(albums)

  return (
    <section className="flex flex-col justify-start items-start w-full h-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
     <h1 className='text-2xl text-left py-4'>Trending Albums</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full'>
      {albums ? albums.data.albums.map((a) => {
        return(
          <Link to='/albumDetails' onClick={() => dispatch(fetchQueryAlbum(a.url))} className='flex flex-col justify-center items-center'>
            <img className='h-[200px]' src={a.image[2].link} alt={a.name} />
            {a.name}
          </Link>
        )
      }) : 'Nothing to show' }
      </div>
    </section>
  )
}

export default Albums