import React, { useEffect, useState } from 'react'

const Playlists = () => {

  const [playlists, setPlaylists] = useState('')

  useEffect(() => {
    getPlaylists()
  },[])
  
//  const getPlaylists = async() => {
//   const res = await fetch('https://saavn.me/modules?language=punjabi')
//   const data = await res.json()
//   console.log(data)
//  }

 const getPlaylists = async() => {
  const res = await fetch('https://saavn.me/modules?language=punjabi')
  const data = await res.json()
  setPlaylists(data.data.playlists)
  console.log(data.data.playlists)
}

console.log(playlists)

  return (
    <section className="flex flex-col justify-start items-start w-full h-full p-4 ">
     <h1 className='text-2xl text-left py-4'>Trending Playlists</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 overflow-y-scroll scrollbar scrollbar-thumb-[#25a56a]/70 scrollbar-track-[#25a56a]/30 w-full'>
      {playlists ? playlists?.map((p) => {
        return(
          <span>
            <img className='h-[200px]' src={p.image[2].link} alt={p.name} />
            {p.title}
          </span>
        )
      }) : 'Nothing to show' }
      </div>
    </section>
  )
}

export default Playlists