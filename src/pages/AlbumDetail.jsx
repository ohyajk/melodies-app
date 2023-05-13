import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {src} from '../redux/PlayerSlice'
import htmlEntitiesDecoder from 'html-entities-decoder'


const AlbumDetail = () => {
  const dispatch = useDispatch()
  const albumData = useSelector((state) => state.AlbumDetail.data)
  const currentSrc = useSelector(state => state.Player.data)

  if(albumData?.data){
    return (
      <section className="flex flex-col justify-start items-start w-full h-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
       <h1>{htmlEntitiesDecoder(albumData.data.name)}</h1>
       <div className='flex flex-col w-full gap-4 p-4'>
        {albumData.data.songs.map((s) => {
          return(
            <span className='flex flex-1 flex-grow p-2 bg-[#2a2a2a] w-full gap-4 px-4 justify-between items-center'>
            <div className='flex gap-4 items-center justify-start'>
            <img className='h-[70px]' src={s.image[2].link} alt={s.name} />
            <div className='flex flex-col justify-center'>
            <h2 className='text-lg font-semibold'>{htmlEntitiesDecoder(s.name)}</h2>
              <h3 className='opacity-70 '>{s.primaryArtists}</h3>
            </div> 
            </div>
            <div className='flex justify-start items-center gap-2'>
            <button className='justify-self-end h-[50px] w-[50px] bg-myGreen rounded-full' onClick={() => dispatch(src(s))} ><i className={currentSrc == s ? "fa-sharp fa-solid fa-pause fa-xl" : "fa-sharp fa-solid fa-play fa-xl"}></i></button>
            <button className='justify-self-end h-[50px] w-[50px] bg-red-500 rounded-full'  ><i class="fa-solid fa-heart fa-xl"></i></button>
            </div>

            </span>
          )
        })}
       </div>
      </section>
    )
  }else{
    return (
      <section className="flex flex-col justify-start items-start w-full h-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
       No data...
      </section>
    )
  }

}

export default AlbumDetail