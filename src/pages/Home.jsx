import { useState } from "react"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchSongs } from '../redux/SongDetailSlice'

const Home = () => {



  const [query, setQuery] = useState('')
  const [data, setData] = useState('')
  const dispatch = useDispatch()

  const search = async() => {
    const res = await fetch(`https://saavn.me/search/all?query=${query}`)
    const data = await res.json()
    setData(data.data.songs.results)
  }

  console.log(data)

  return (
    <section className="flex flex-col justify-start items-center w-full h-full pt-24 px-4 border-l-2 border-[#2a2a2a]">
      <form onSubmit={(e) => {e.preventDefault(); search()}} className="flex flex-col gap-4 items-center">
        <h2 className="text-center text-2xl">Search songs here...</h2>
        <input onChange={(e) => setQuery(e.target.value)} type="text" className="border border-white/50 outline-none py-2 px-4 md:w-[400px] lg:w-[600px] rounded-3xl" required />
        <input className="bg-[#25a56a] w-[200px] py-2 px-4 rounded-3xl hover:bg-[#25a56a]/50 cursor-pointer" type="submit" value="Search" />
      </form>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3  w-full">
        {
          data ? data.map((d) => {
            return(
              <Link to='/songdetails' onClick={() => dispatch(fetchSongs(d.url))} >
                {d.title}
                <img className='h-[200px]' src={d.image[2].link} alt={d.title} />
              </Link>
            )
          }) : 'Search result will show here...'
        }
        
      </div>
    </section>
  )
}

export default Home
