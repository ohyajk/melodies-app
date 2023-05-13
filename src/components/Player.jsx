import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const Player = () => {

    const src = useSelector(state => state.Player.data)


    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.5)
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
    }, [audioPlayer?.current?.loadedMetaData, audioPlayer?.current?.readyState])

    const calculateTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

        const secs = Math.floor(seconds % 60)
        const returnedSecs = secs < 10 ? `0${secs}` : `${secs}`

        return `${returnedMinutes}:${returnedSecs}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
        setCurrentTime(progressBar.current.value)
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const changeVolume = () => {
        audioPlayer.current.volume = volume
    }

    return (
        <>
            <div className='fixed bottom-0 left-0 flex flex-col justify-between gap-3 bg-[#2a2a2a] py-2 z-10 w-[280px]'>
                <audio ref={audioPlayer} src={src.downloadUrl[4].link} autoPlay></audio>
                {/* Song Meta */}
                <div className='flex gap-4 px-2'>
                    <img className='h-[80px]' src={src.image[1].link} alt="" />
                    <span className='flex flex-col justify-center'>
                        <h2 className='text-lg font-semibold'>{src.name}</h2>
                        <h3 className='opacity-70 '>{src.primaryArtists.split(',').slice(0,2).join(',').replace(/&amp;/g, "&")}</h3>
                    </span>
                </div>

                    {/* Time and slider */}
                    <div className='flex justify-center items-center px-2 w-full'>
                        
                        <input type="range" defaultValue='0' ref={progressBar} className='progress w-full cursor-pointer' onChange={changeRange} />
                        
                    </div>

                    {/* Play pause */}
                    <div className='flex justify-center items-center gap-4  px-10 '>
                        <span>{calculateTime(currentTime)}</span>
                        <button className='h-[50px] w-[50px] bg-myGreen rounded-full' onClick={togglePlayPause} ><i className={isPlaying ? "fa-sharp fa-solid fa-pause fa-xl " : "fa-sharp fa-solid fa-play fa-xl"}></i></button>
                        <span>{(duration && !isNaN(duration)) && calculateTime(duration)}</span>
                    </div>


                {/* Volume slider */}
                <div className='flex justify-center items-center gap-4 px-2 py-2'>
                <i className="text-white/70 fa-sharp fa-solid fa-volume-up fa-lg"></i>
                    <input type="range" min="0" max="1" step="0.01" defaultValue={volume} className='progress' onChange={(e) => setVolume(parseFloat(e.target.value))} onInput={changeVolume} />
                    
                </div>
            </div>
        </>
    )
}

export default Player