import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {src} from '../redux/PlayerSlice'
import htmlEntitiesDecoder from 'html-entities-decoder'

const Tiles = ({img,name,primaryArtists,song,}) => {

  const dispatch = useDispatch()
  const currentSrc = useSelector(state => state.Player.data)

  return (
    <>
    <span className='flex flex-1 flex-grow p-2 bg-[#2a2a2a] w-full gap-4 md:px-4 justify-between items-center'>
            <div className='flex gap-4 items-center justify-start'>
            <img className='h-[70px]' src={img} alt={name} />
            <div className='flex flex-col justify-center'>
            <h2 className='md:text-lg font-semibold'>{htmlEntitiesDecoder(name)}</h2>
              <h3 className='text-sm md:text-base opacity-70 '>{htmlEntitiesDecoder(primaryArtists)}</h3>
            </div> 
            </div>
            <div className='flex justify-start items-center gap-2'>
            <button className='justify-self-end h-[30px] md:h-[50px] w-[30px] md:w-[50px] bg-myGreen rounded-full' onClick={() => dispatch(src(song))} ><i className={currentSrc == song ? "fa-sharp fa-solid fa-pause md:fa-xl" : "fa-sharp fa-solid fa-play md:fa-xl"}></i></button>
            <button className='justify-self-end h-[30px] md:h-[50px] w-[30px] md:w-[50px] bg-red-500 rounded-full'  ><i class="fa-solid fa-heart md:fa-xl"></i></button>
            </div>

            </span>
    </>
  )
}

export default Tiles