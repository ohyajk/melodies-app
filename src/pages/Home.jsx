import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { src } from '../redux/PlayerSlice'

const Home = () => {
  const dispatch = useDispatch()
  const songs = useSelector(state => state.Home.data)
  console.log(songs)

  return (
    <section className="flex flex-col justify-start items-start w-full md:min-h-screen pt-24 px-4 border-l-2 border-[#2a2a2a]">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full mb-[50px]'>
      {songs ? songs.data.songs.map((s) => {
        return(
          <span className='relative flex flex-col justify-center items-center cursor-pointer p-4'>
            <img className='h-[250px]' src={s.image[2].link} alt={s.name} />
            <span>{s.name}</span>
            <div className='absolute opacity-0 hover:opacity-100 flex backdrop-grayscale backdrop-brightness-75  h-full w-full justify-center items-center gap-2'>
            <button className=' h-[50px] w-[50px] bg-myGreen rounded-full' onClick={() => dispatch(src(s))} ><i className="fa-sharp fa-solid fa-play fa-xl"></i></button>
            <button className=' h-[50px] w-[50px] bg-red-500 rounded-full'  ><i class="fa-solid fa-heart fa-xl"></i></button>
            </div>
          </span>
        )
      }) : 'Nothing to show' }
      </div>
    </section>
  )
}

export default Home
