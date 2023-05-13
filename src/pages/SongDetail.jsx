import htmlEntitiesDecoder from 'html-entities-decoder'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { src } from '../redux/PlayerSlice'

const SongDetail = () => {

  const dispatch = useDispatch()
  const songData = useSelector((state) => state.SongDetail.data)
  const song = songData?.data[0]
  const currentSrc = useSelector(state => state.Player.data)
  console.log(song)

  if (songData?.data[0]) {
    return (
      <section className="flex justify-center items-start w-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
        <span className='flex flex-col  p-2 bg-[#2a2a2a] gap-4 px-4 justify-between items-center'>
          <div className='flex flex-col gap-4 items-center justify-start'>
            <img className='h-[250px]' src={song.image[2].link} alt={song.name} />
            <div className='flex flex-col justify-center'>
              <h2 className='text-lg font-semibold'>{htmlEntitiesDecoder(song.name)}</h2>
              <h3 className='opacity-70 '>{song.primaryArtists}</h3>
            </div>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <button className='justify-self-end h-[50px] w-[50px] bg-myGreen rounded-full' onClick={() => dispatch(src(song))} ><i className={currentSrc == song ? "fa-sharp fa-solid fa-pause fa-xl" : "fa-sharp fa-solid fa-play fa-xl"}></i></button>
            <button className='justify-self-end h-[50px] w-[50px] bg-red-500 rounded-full'  ><i class="fa-solid fa-heart fa-xl"></i></button>
          </div>
        </span>
      </section>
    )
  } else {
    return (
      <span>No Data...</span>
    )
  }
}

export default SongDetail