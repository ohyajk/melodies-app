import React, { useEffect, useRef, useState } from 'react'

const Player = (props) => {

    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioPlayer = useRef()
    const progressBar = useRef()
    const animationRef = useRef()

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        setDuration(seconds)
        progressBar.current.max = seconds
    },[audioPlayer?.current?.loadedMetaData, audioPlayer?.current?.readyState])

    const calculateTime = (seconds) => {
        const minutes = Math.floor(seconds/60)
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

        const secs = Math.floor(seconds % 60)
        const returnedSecs = secs < 10 ? `0${secs}` : `${secs}`

        return `${returnedMinutes}:${returnedSecs}`
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setIsPlaying(!prevValue)
        if(!prevValue){
            audioPlayer.current.play()
            animationRef.current = requestAnimationFrame(whilePlaying)
        }else{
            audioPlayer.current.pause()
            cancelAnimationFrame(animationRef.current)
        }
    }

    const changeRange = () =>  {
        audioPlayer.current.currentTime = progressBar.current.value
        setCurrentTime(progressBar.current.value)
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    return (
        <div className='absolute bottom-0 w-full bg-[#2a2a2a] py-2'>
            <audio ref={audioPlayer} src={props.link}></audio>

            {/* Time and slider */}
            <div className='flex justify-center items-center gap-4 px-10 py-2'>
                <span>{currentTime}</span>
                <input type="range" defaultValue='0' ref={progressBar} className='progress' onChange={changeRange} />
                <span>{(duration && !isNaN(duration)) && calculateTime(duration)}</span>
            </div>


            {/* Play pause back forth button */}
            <div className='flex justify-center items-center gap-4  px-10 py-2'>
                <button><i className="fa-sharp fa-solid fa-backward fa-xl"></i></button>
                <button onClick={togglePlayPause} ><i className={isPlaying ? "fa-sharp fa-solid fa-pause fa-xl" : "fa-sharp fa-solid fa-play fa-xl"}></i></button>
                <button><i className="fa-sharp fa-solid fa-forward fa-xl"></i></button>
            </div>
        </div>
    )
}

export default Player