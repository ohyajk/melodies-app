import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {src} from '../redux/PlayerSlice'
import htmlEntitiesDecoder from 'html-entities-decoder'
import Tiles from './Tiles'


const PlaylistDetail = () => {
  const dispatch = useDispatch()
  const playlistData = useSelector((state) => state.PlaylistDetail.data)
  const currentSrc = useSelector(state => state.Player.data)

  if(playlistData?.data){
    return (
      <section className="flex flex-col justify-start items-start w-full h-full pt-24 px-1 md:px-4 border-l-2 border-[#2a2a2a]">
       <h1>{htmlEntitiesDecoder(playlistData.data.name)}</h1>
       <div className='flex flex-col w-full gap-4 md:p-4'>
        {playlistData.data.songs.map((s) => {
          return(
            <Tiles img={s.image[2].link} name={s.name} primaryArtists={s.primaryArtists} song={s} />
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

export default PlaylistDetail