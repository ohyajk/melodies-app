import React from 'react'
import { useSelector } from 'react-redux'

const Albums = () => {

 const albums = useSelector(state => state.Albums.data)

console.log(albums)

  return (
    <section className="flex flex-col justify-start items-start w-full h-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
     <h1 className='text-2xl text-left py-4'>Trending Albums</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full'>
      {albums ? albums.data.albums.map((a) => {
        return(
          <span className='flex flex-col justify-center items-center'>
            <img className='h-[200px]' src={a.image[2].link} alt={a.name} />
            {a.name}
          </span>
        )
      }) : 'Nothing to show' }
      </div>
    </section>
  )
}

export default Albums