import React from 'react';
import { useSelector } from 'react-redux';

const SongDetail = () => {
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

  return (
    <div>
      {song.name}
      <img className='h-[300px]' src={song.image[2].link} alt={song.name} />
      <div className='flex flex-col gap-2'>
        {song.downloadUrl.map((s) => {
          return (
            <a className='border-2 border-white bg-white text-black' href={s.link} download>
              {s.quality}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SongDetail;
