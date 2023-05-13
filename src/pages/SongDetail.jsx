import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { src } from '../redux/PlayerSlice';

const SongDetail = () => {
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state.SongDetail);

  if (isLoading) {
    return <span>Loading data...</span>;
  }

  if (error) {
    return (
      <span>
        There is a problem sir... <br /> {error}
      </span>
    );
  }

  if (!data || !data.data || data.data.length === 0) {
    return <span>No data available</span>;
  }

  const song = data.data[0];
  console.log(song)
  return (
    <div className='flex flex-col justify-start items-center border-l-2 border-[#2a2a2a] pt-24 px-4 '>
      <img className='h-[300px]' src={song.image[2].link} alt={song.name} />
      <div className='flex flex-col gap-2 mt-4'>
      <h1 className='text-xl font-bold'>Song : {song.name}</h1>
      <h2 className='text-xl font-bold'>Album : {song.album.name}</h2>
      <h2 className='text-xl font-bold'>Artist : {song.primaryArtists}</h2>
      <h2 className='text-xl font-bold'>Release Date : {song.releaseDate}</h2>
      <h2 className='text-xl font-bold'>Label : {song.label}</h2>
      <button onClick={() => {dispatch(src(song))}} className='bg-[#25a56a] py-1'>Play</button>
      </div>

    </div>
  );
};

export default SongDetail;
