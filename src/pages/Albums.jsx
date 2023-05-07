import React, { useEffect, useState } from 'react'

const Albums = () => {

  const [albums, setAlbums] = useState('')

  useEffect(() => {
    getAlbums()
  },[])
  
//  const getAlbums = async() => {
//   const res = await fetch('https://saavn.me/modules?language=punjabi')
//   const data = await res.json()
//   console.log(data)
//  }

 const getAlbums = async() => {
  const res = await fetch('https://saavn.me/modules?language=punjabi')
  const data = await res.json()
  setAlbums(data.data.albums)
}

console.log(albums)

  return (
    <section className="flex flex-col justify-start items-start w-full h-full p-4 ">
     <h1 className='text-2xl text-left py-4'>Trending Albums</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  w-full'>
      {albums ? albums?.map((a) => {
        return(
          <span>
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